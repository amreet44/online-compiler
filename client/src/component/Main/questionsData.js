import { useState } from "react";

const useQuestionsData = () => {
  const [questions, setQuestions] = useState([
    {
      title: "Add two numbers",
      text: "Given two numbers, give the result of their sum",
      code: `#include <iostream>
#include <sstream>
#include <vector>
using namespace std;
      
     
int helper(int x, int y) {
// Write your code here 
        
}
      `,
      executionCode: `int main() {
        // Test Cases
        cout << "Test Cases:" << endl;
        vector<pair<string, string>> testCases = {
          {"2 3", "5"},
          {"4 8", "12"},
        };
      
        for (const auto& testCase : testCases) {
          string input = testCase.first;
          string expectedOutput = testCase.second;
      
          int x, y;
          istringstream iss(input);
          iss >> x >> y;
      
          // Call the user's helper function with test case input
          int userResult = helper(x, y);
      
          // Compare the result with the expected output
          if (userResult == stoi(expectedOutput)) {
            cout << "Input: " << input << ", Output: " << userResult << " (Passed)" << endl;
          } else {
            cout << "Input: " << input << ", Output: " << userResult << " (Failed, Expected: " << expectedOutput << ")" << endl;
          }
        }
      
        return 0;
      }
      `,
    },
    {
      title: "multiply two numbers",
      text: "Given two numbers, give the result of their sum",
      code: `#include <iostream>
#include <sstream>
#include <vector>

using namespace std;
      
      
int helper(int x, int y) {
  // User's code logic here
        
}
      `,
      executionCode: `int main() {
        // Test Cases
        cout << "Test Cases:" << endl;
        vector<pair<string, string>> testCases = {
          {"2 3", "6"},
          {"4 8", "32"},
        };
      
        for (const auto& testCase : testCases) {
          string input = testCase.first;
          string expectedOutput = testCase.second;
      
          int x, y;
          istringstream iss(input);
          iss >> x >> y;
      
          // Call the user's helper function with test case input
          int userResult = helper(x, y);
      
          // Compare the result with the expected output
          if (userResult == stoi(expectedOutput)) {
            cout << "Input: " << input << ", Output: " << userResult << " (Passed)" << endl;
          } else {
            cout << "Input: " << input << ", Output: " << userResult << " (Failed, Expected: " << expectedOutput << ")" << endl;
          }
        }
      
        return 0;
      }
      `,
    },
  ]);

  return [questions, setQuestions];
};

export default useQuestionsData;
