/*
 * @lc app=leetcode.cn id=328 lang=cpp
 *
 * [328] 奇偶链表
 */

#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

// @lc code=start
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* oddEvenList(ListNode* head) {
        ListNode* oddEnd = head;
        if (!head || !head->next) return head;
        ListNode* evenEnd = head->next;
        ListNode* evenBegin = evenEnd;
        ListNode* cur = evenEnd;
        bool isOdd = false;
        while (isOdd = !isOdd, cur = cur->next, cur) {
            if (isOdd) {
                oddEnd->next = cur;
                oddEnd = cur;
            } else {
                evenEnd->next = cur;
                evenEnd = cur;
            }
        }
        oddEnd->next = evenBegin;
        evenEnd->next = nullptr;
        return head;
    }
};
// @lc code=end

int main() {
    ListNode* head = new ListNode(1);
    head->next = new ListNode(2);
    head->next->next = new ListNode(3);
    head->next->next->next = new ListNode(4);
    head->next->next->next->next = new ListNode(5);
    
    Solution s;
    ListNode* iter = s.oddEvenList(head);


    // ListNode* iter = head;
    int count = 10;
    while(iter && count--) {
        cout << iter->val << endl;
        iter = iter->next;
    }
    return 0;
}