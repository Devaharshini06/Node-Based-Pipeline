from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

# Allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PipelineData(BaseModel):
    nodes: List[dict]
    edges: List[dict]


@app.get('/')
def read_root():
    return {'Ping': 'Pong'}


@app.post('/pipelines/parse')
def parse_pipeline(data: PipelineData):

    nodes = data.nodes
    edges = data.edges

    num_nodes = len(nodes)
    num_edges = len(edges)

    # Build graph
    graph = {}
    indegree = {}

    for node in nodes:
        node_id = node['id']
        graph[node_id] = []
        indegree[node_id] = 0

    for edge in edges:
        source = edge['source']
        target = edge['target']

        graph[source].append(target)
        indegree[target] += 1

    # Kahn's Algorithm for DAG detection
    queue = [node for node in indegree if indegree[node] == 0]

    visited = 0

    while queue:
        current = queue.pop(0)
        visited += 1

        for neighbor in graph[current]:
            indegree[neighbor] -= 1

            if indegree[neighbor] == 0:
                queue.append(neighbor)

    is_dag = visited == num_nodes

    return {
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': is_dag
    }