---
layout: "/src/layouts/CsesProblemLayout.astro"
title: Dice Combinations
author: Matheus Loiola
description: Count the number of ways to construct sum n by throwing a dice one or more times.
image: {
    src: "/images/cses/dice-combination.jpg",
    alt: "Problem 'Dice Combinations' cover image",
}
pubDate: 2023-08-04
tag: dynamic programming
---
# [Dice Combinations][1]

[1]: https://cses.fi/problemset/task/1633

This problem is a classic example of a dynamic programming problem. The idea is to count the number of ways to construct sum `n` by throwing a dice one or more times. The solution is to use a bottom-up approach, where we start from the base case and build the solution for bigger values of `n` until we reach the desired value.

## Base case

The base case is when `n = 0`. In this case, there is only one way to construct the sum `n`, which is by not throwing the dice at all. Therefore, the answer for `n = 0` is `1`.

## Recurrence relation

The recurrence relation is given by the following formula:

```
dp[n] = dp[n - 1] + dp[n - 2] + dp[n - 3] + dp[n - 4] + dp[n - 5] + dp[n - 6]
```

The idea is to count the number of ways to construct the sum `n` by throwing a dice one or more times. We can do that by counting the number of ways to construct the sum `n - 1` and then adding the number of ways to construct the sum `n - 2`, `n - 3`, `n - 4`, `n - 5` and `n - 6`. This is because we can throw a dice and get a number from `1` to `6`. If we get a `1`, we can construct the sum `n` by throwing a dice and getting a `n - 1`. If we get a `2`, we can construct the sum `n` by throwing a dice and getting a `n - 2`. And so on.

## Implementation

```cpp
#include <bits/stdc++.h>
using namespace std;

const int MOD = 1e9 + 7;

int main() {
    int n;
    cin >> n;

    vector<int> dp(n + 1);
    dp[0] = 1;

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= 6; j++) {
            if (i - j >= 0) {
                dp[i] = (dp[i] + dp[i - j]) % MOD;
            }
        }
    }

    cout << dp[n] << "\n";
}
```

## Time and space complexity

The time complexity of this solution is `O(n)`, since we have to iterate over all values from `1` to `n`. The space complexity is also `O(n)`, since we have to store the values of `dp` from `0` to `n`.

