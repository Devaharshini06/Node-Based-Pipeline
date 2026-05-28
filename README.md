# VectorShift Frontend Technical Assessment

## Overview

This project is a node-based pipeline builder built using ReactFlow and FastAPI.

The application allows users to:

* Drag and drop pipeline nodes
* Connect nodes visually
* Create dynamic text variables
* Submit pipelines to a backend API
* Validate whether a pipeline forms a DAG (Directed Acyclic Graph)

---

# Features

## Node Abstraction

A reusable `BaseNode` component was created to reduce duplication and improve scalability across node types.

This abstraction handles:

* Shared styling
* Handle rendering
* Layout structure
* Content rendering

Additional custom nodes were created to demonstrate extensibility:

* API Node
* Math Node
* Filter Node
* Delay Node
* Email Node

---

## Dynamic Text Node

The Text Node supports:

* Auto-resizing textarea behavior
* Dynamic variable parsing using `{{variable}}` syntax
* Automatic generation of input handles based on detected variables

Example:

```txt
Hello {{name}}
Your email is {{email}}
```

This automatically creates dynamic input handles for:

* `name`
* `email`

---

## Backend Integration

The frontend sends pipeline nodes and edges to a FastAPI backend.

The backend:

* Counts nodes
* Counts edges
* Detects whether the graph is a DAG using Kahn’s Algorithm

The frontend displays the results in a custom modal interface.

---

# Tech Stack

## Frontend

* React
* ReactFlow
* Zustand

## Backend

* FastAPI
* Python

---

# Setup Instructions

## Frontend

```bash
cd frontend
npm install
npm start
```

---

## Backend

```bash
cd backend
pip install fastapi uvicorn
uvicorn main:app --reload
```

---

# Project Structure

```txt
frontend/src
├── components
│   ├── BaseNode.js
│   └── ResultModal.js
│
├── nodes
│   ├── inputNode.js
│   ├── outputNode.js
│   ├── llmNode.js
│   ├── textNode.js
│   ├── apiNode.js
│   ├── mathNode.js
│   ├── filterNode.js
│   ├── delayNode.js
│   └── emailNode.js
```

---

# Improvements Made

* Reusable node abstraction
* Unified UI styling
* Dynamic variable parsing
* Modern modal UI
* DAG validation
* Improved ReactFlow interactions
* Enhanced node styling and animations
