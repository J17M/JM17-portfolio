# 217. Contains Duplicate

## Solution 1

This problem provides an integer array `nums` in which we need to check for duplicates within the array. If the array contains any duplicate, return true; otherwise return false.

My first idea was to sort the array and iterate through every element (except for the last) and compare each element to the one next to it. Since the array is sorted, if there is a duplicate, it must appear as two identical adjacent values. This iteration is guaranteed to check for it. As soon as a duplicate is found, it returns true. If the loop finishes and there are no duplicates, false is returned. Here is my code solution in Python:

```python
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        nums.sort() # O(n log n)
        for i in range(len(nums) - 1): # O(n)
            if nums[i] == nums[i+1]:
                return True

        return False
```

## Time Complexity

Sorting the array takes O(n log n) time and iterating through the entire array takes O(n) time. Dropping non-dominant terms results in an overall time complexity of O(n log n).

## Space Complexity

Technically, Python’s `sort()` uses Timsort, which uses O(n) space in the worst case. It can also be said that space complexity is O(1) since the solution does not allocate anything extra. Either works.

## Solution 2

A more optimized solution would be to compare the length of the original array to the length of the set. Sets do not allow duplicates, so converting the `nums` array to a set will drop any duplicate values. If duplicates exist, the set length will be smaller than the original, and since lengths do not match, the solution returns true. If no duplicates are found, both the original array and the set are equal in length and the solution returns false. Here is the solution:

```python
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        return len(nums) != len(set(nums))
```

## Time Complexity

The time complexity is O(n) since creating a set requires an iteration through each element once.

## Space Complexity

Because we are creating a new set that can grow up to size n, the space complexity is O(n).
