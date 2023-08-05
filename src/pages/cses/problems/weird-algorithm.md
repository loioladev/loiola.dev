---
layout: "/src/layouts/CsesProblemLayout.astro"
title: Weird Algorithm
author: Matheus Loiola
description: Simulate the execution of the algorithm for a given value of n.
image: {
    src: "/images/cses/weird-algorithm.jpg",
    alt: "Problem 'Weird Algorithm' cover image",
}
pubDate: 2023-08-04
tag: introductory problems
---
# [Weird Algorithm][1]

[1]: https://cses.fi/problemset/task/1068

This problem is a simple simulation problem, and the solution is to simulate the execution of the algorithm for a given value of `n`.

# Implementation

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n;
    cin >> n;
    while (n != 1) {
        cout << n << " ";
        if (n % 2 == 0)
            n /= 2;
        else 
            n = n * 3 + 1;
    }
    cout << n << "\n";
}
```

# Time and space complexity

The time complexity is `O(n)`, since we need to simulate the execution of the algorithm for a given value of `n`. The space complexity is `O(1)`, since we only need to store the value of `n` in memory.
