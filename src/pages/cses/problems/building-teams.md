---
layout: "/src/layouts/CsesProblemLayout.astro"
title: Building Teams
author: Matheus Loiola
description: Print the teams which each person belong to, and does not have any friends in the same team.
image: {
    src: "/images/cses/building-teams.png",
    alt: "Problem 'Building Teams' cover image",
}
pubDate: 2023-08-05
tag: graph algorithms
---
# [Building Teams][1]

[1]: https://cses.fi/problemset/task/1668

This problem is a simple graph coloring problem/bipartite graph problem, where each person has to be of a different color of their friends. So, the ideia is to color the graph with two colors, such that no two adjacent vertices, or friends, have the same color.

# Implementation

In order to color the graph, we can iterate through each person and use a BFS algorithm to move his friends in separate teams, and so on. The code below shows the implementation of this algorithm, where `teams` is a map that stores the color of each person, and `adj` is the adjacency list of friends of each person.

```cpp
unordered_map<int, char> teams;
vector<vi> adj;
queue<pair<int, bool>> q;

bool bfs(int node, bool team) {
    q.push({node, team});
    while(!q.empty()){
        int person = q.front().first;
        bool next_team = !q.front().second;
        q.pop();

        if (next_team) 
            teams[p] = 'A';
        else 
            teams[p] = 'B';

        for (auto &e : adj[p]){
            // verify visited
            if (teams[e] != 0){
                // verify if is possible to form teams
                if ((teams[e] == 'A' && next_team) || (teams[e] == 'B' && !next_team))
                    return false;
                continue;
            }
            q.push({e, next_team});
        }
    }
    return true;
}
```

# Time and space complexity

The time complexity is `O(n + m)`, since we need to traverse all the vertices and edges of the graph. The space complexity is `O(n)`, since we need to store the color of each vertex in memory.
