// LeetCode Top 150 Questions & Answers in JavaScript

// 1️⃣ Two Sum (LeetCode #1)
function twoSum(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

// 2️⃣ Contains Duplicate (LeetCode #217)
function containsDuplicate(nums) {
    let set = new Set(nums);
    return set.size !== nums.length;
}

// 3️⃣ Valid Anagram (LeetCode #242)
function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    let count = {};
    for (let char of s) count[char] = (count[char] || 0) + 1;
    for (let char of t) {
        if (!count[char]) return false;
        count[char]--;
    }
    return true;
}

// 4️⃣ Group Anagrams (LeetCode #49)
function groupAnagrams(strs) {
    let map = new Map();
    for (let str of strs) {
        let key = str.split('').sort().join('');
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(str);
    }
    return Array.from(map.values());
}

// 5️⃣ Top K Frequent Elements (LeetCode #347)
function topKFrequent(nums, k) {
    let map = new Map();
    for (let num of nums) map.set(num, (map.get(num) || 0) + 1);

    return [...map.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(item => item[0]);
}

// 6️⃣ Product of Array Except Self (LeetCode #238)
function productExceptSelf(nums) {
    let res = Array(nums.length).fill(1);
    let left = 1,
        right = 1;
    for (let i = 0; i < nums.length; i++) {
        res[i] *= left;
        left *= nums[i];
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] *= right;
        right *= nums[i];
    }
    return res;
}

// 7️⃣ Valid Parentheses (LeetCode #20)
function isValid(s) {
    let stack = [];
    let map = { ')': '(', '}': '{', ']': '[' };
    for (let char of s) {
        if (map[char]) {
            if (stack.pop() !== map[char]) return false;
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}

// 8️⃣ Best Time to Buy and Sell Stock (LeetCode #121)
function maxProfit(prices) {
    let minPrice = Infinity,
        maxProfit = 0;
    for (let price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    return maxProfit;
}

// 9️⃣ Longest Consecutive Sequence (LeetCode #128)
function longestConsecutive(nums) {
    let set = new Set(nums);
    let longest = 0;
    for (let num of nums) {
        if (!set.has(num - 1)) {
            let currentNum = num;
            let streak = 1;
            while (set.has(currentNum + 1)) {
                currentNum++;
                streak++;
            }
            longest = Math.max(longest, streak);
        }
    }
    return longest;
}

// 🔟 Valid Palindrome (LeetCode #125)
function isPalindrome(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let left = 0,
        right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}

// 1️⃣1️⃣ 3Sum (LeetCode #15)
function threeSum(nums) {
    nums.sort((a, b) => a - b);
    let res = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1,
            right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]]);
                while (nums[left] === nums[left + 1]) left++;
                while (nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return res;
}

// 1️⃣2️⃣ Valid Sudoku (LeetCode #36)
function isValidSudoku(board) {
    let rows = Array(9).fill().map(() => new Set());
    let cols = Array(9).fill().map(() => new Set());
    let boxes = Array(9).fill().map(() => new Set());

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let val = board[r][c];
            if (val === '.') continue;
            let boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
            if (rows[r].has(val) || cols[c].has(val) || boxes[boxIndex].has(val)) {
                return false;
            }
            rows[r].add(val);
            cols[c].add(val);
            boxes[boxIndex].add(val);
        }
    }
    return true;
}

// 1️⃣3️⃣ Longest Substring Without Repeating Characters (LeetCode #3)
function lengthOfLongestSubstring(s) {
    let set = new Set();
    let left = 0,
        maxLength = 0;
    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}

// 1️⃣4️⃣ Median of Two Sorted Arrays (LeetCode #4)
function findMedianSortedArrays(nums1, nums2) {
    let merged = [...nums1, ...nums2].sort((a, b) => a - b);
    let mid = Math.floor(merged.length / 2);
    return merged.length % 2 === 0 ? (merged[mid - 1] + merged[mid]) / 2 : merged[mid];
}

// 1️⃣5️⃣ Container With Most Water (LeetCode #11)
function maxArea(height) {
    let left = 0,
        right = height.length - 1,
        maxWater = 0;
    while (left < right) {
        let minHeight = Math.min(height[left], height[right]);
        maxWater = Math.max(maxWater, minHeight * (right - left));
        height[left] < height[right] ? left++ : right--;
    }
    return maxWater;
}

// 1️⃣6️⃣ Integer to Roman (LeetCode #12)
function intToRoman(num) {
    let map = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ];
    let result = '';
    for (let [value, symbol] of map) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }
    return result;
}

// 1️⃣7️⃣ Roman to Integer (LeetCode #13)
function romanToInt(s) {
    let map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        let curr = map[s[i]],
            next = map[s[i + 1]];
        curr < next ? total -= curr : total += curr;
    }
    return total;
}

// 1️⃣8️⃣ Longest Common Prefix (LeetCode #14)
function longestCommonPrefix(strs) {
    if (!strs.length) return '';
    let prefix = strs[0];
    for (let str of strs) {
        while (!str.startsWith(prefix)) {
            prefix = prefix.slice(0, -1);
            if (!prefix) return '';
        }
    }
    return prefix;
}
// LeetCode Top 150 Questions & Answers in JavaScript

// 1️⃣9️⃣ Letter Combinations of a Phone Number (LeetCode #17)
function letterCombinations(digits) {
    if (!digits.length) return [];
    let map = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    let res = [];

    function backtrack(index, path) {
        if (index === digits.length) {
            res.push(path);
            return;
        }
        for (let char of map[digits[index]]) {
            backtrack(index + 1, path + char);
        }
    }
    backtrack(0, '');
    return res;
}

// 2️⃣0️⃣ Generate Parentheses (LeetCode #22)
function generateParenthesis(n) {
    let res = [];

    function backtrack(open, close, path) {
        if (path.length === n * 2) {
            res.push(path);
            return;
        }
        if (open < n) backtrack(open + 1, close, path + '(');
        if (close < open) backtrack(open, close + 1, path + ')');
    }
    backtrack(0, 0, '');
    return res;
}

// 2️⃣1️⃣ Merge Two Sorted Lists (LeetCode #21)
function mergeTwoLists(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}

// 2️⃣2️⃣ Valid Parentheses (LeetCode #20)
function isValid(s) {
    let stack = [];
    let map = { ')': '(', '}': '{', ']': '[' };
    for (let char of s) {
        if (map[char]) {
            if (stack.pop() !== map[char]) return false;
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}