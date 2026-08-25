# TypeScript Fundamentals 🚀

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![VS Code](https://img.shields.io/badge/VS_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

Welcome to my TypeScript playground! This repository tracks my progress as I work through my online course modules and practice automation concepts.

## 📁 Repository Structure
<!-- START_TREE -->
<details>
<summary><b>▶ Click here to view all files & folders</b></summary>

```text
.
├── 1_Language_Concepts
│   ├── 1_Introduction
│   │   └── typescript-introduction.md
│   ├── 2_TypeScript_Setup_Environment
│   │   └── FirstDemo.ts
│   ├── 3_TsVariables
│   │   ├── 01_Comments.ts
│   │   ├── 02_Variables.ts
│   │   ├── 03_Variables_Scope.ts
│   │   ├── 04_Variables_Declaration.ts
│   │   ├── 05_Variables_Re-declaration.ts
│   │   ├── 06_Var_Re-assignmentOrRe-initialization.ts
│   │   ├── 07_Var_Hosting.ts
│   │   └── variables-guide.md
│   ├── 4_DataTypes
│   │   ├── 01_Test.ts
│   │   ├── 02_DataTypes.ts
│   │   ├── 03_Number.ts
│   │   ├── 04_String.ts
│   │   ├── 05_Boolean.ts
│   │   ├── 06_Null.ts
│   │   ├── 07_Any.ts
│   │   ├── 08_Union.ts
│   │   ├── 09_Void.ts
│   │   └── data-types-guide.md
│   ├── 5_Operators
│   │   ├── 01_Operators.ts
│   │   ├── 02_IncrementAndDecrement.ts
│   │   └── 03_TernaryOrConditionalOperator.ts
│   ├── 6_ConditionalStatments
│   │   ├── 01_if.ts
│   │   ├── 02_ifelse.ts
│   │   ├── 03_NestedIfElse.ts
│   │   └── 04_SwitchCase.ts
│   ├── 7_LoopsInTS
│   │   ├── 1_Loops.md
│   │   ├── 2_WhileLoop.ts
│   │   ├── 3_DoWhileLoop.ts
│   │   ├── 4_ForLoop.ts
│   │   └── 5_BreakAndContinue.ts
│   ├── 8_FunctionPart1
│   │   ├── 1_NamedFunctions
│   │   │   ├── 1_WithNoPara.ts
│   │   │   ├── 2_WithPara.ts
│   │   │   ├── 3_RestPara.ts
│   │   │   ├── 4_RestParaDiffDataTypes.ts
│   │   │   ├── 5_OptionalPara.ts
│   │   │   └── 6_DefaultPara.ts
│   │   ├── 2_AnonymousFunction
│   │   │   ├── 1_WithoutPara.ts
│   │   │   ├── 2_WithPara.ts
│   │   │   ├── 3_RestPara.ts
│   │   │   ├── 4_RestParaDiffDataTypes.ts
│   │   │   ├── 5_OptionalPara.ts
│   │   │   └── 6_DefaultPara.ts
│   │   ├── 3_ArrowOrLambdaFunction
│   │   │   ├── 1_ArrowOrLambda.ts
│   │   │   ├── 2_ArrowFunction.ts
│   │   │   ├── 3_ArrowWithPara.ts
│   │   │   ├── 4_ArrowImplict.ts
│   │   │   ├── 5_ArrowOptionalPara.ts
│   │   │   ├── 6_ArrowDefaultPara.ts
│   │   │   ├── 7_ArrowRest.ts
│   │   │   └── 8_ArrowRestMultipleDatatypes.ts
│   │   └── typescript-functions-guide.md
│   ├── 9_FunctionPart2
│   │   ├── 1_CallbackFunction.ts
│   │   └── 2_OverloadingFunction.ts
│   ├── 10_Arrays
│   │   ├── 1_Arrays.ts
│   │   ├── 2_ArrayIterations.ts
│   │   ├── 3_ArrayWithFunction.ts
│   │   ├── 4_ArrayMethods.ts
│   │   └── Aarrays-complete-guide.md
│   ├── 11_Tupple
│   │   ├── 1_Tupple.ts
│   │   ├── 2_TuppleArray_ArrayOfTupples.ts
│   │   └── Tuples-guide.md
│   ├── 12_AdvanceArrayMethods
│   │   ├── 1_ForEach.ts
│   │   ├── 2_Map.ts
│   │   ├── 3_Filter.ts
│   │   ├── 4_Reduce.ts
│   │   ├── 5_Some.ts
│   │   ├── 6_Every.ts
│   │   └── Aarray-Advanced-methods.md
│   ├── 13_String
│   │   ├── 1_String.ts
│   │   ├── 2_StringMethods.ts
│   │   ├── 3_StringImmutable.ts
│   │   ├── 4_MultilineString.ts
│   │   └── strings-guide.md
│   └── 14_Objects
│       ├── 1_Objects.ts
│       ├── 2_ObjectType.ts
│       ├── 3_InlineTypeObject.ts
│       ├── 4_TypeAlias.ts
│       ├── 5_ObjectsUsingClasses.ts
│       └── objects-guide.md
└── 2_Interview_Programs
    ├── 1_if
    │   ├── 1_CharCase.ts
    │   └── 2_Multiple.ts
    ├── 2_IfElse
    │   ├── 1_Elegibiltiy.ts
    │   ├── 2_Compare.ts
    │   ├── 3_PositiveNegative.ts
    │   └── 4_SeniorCitizen.ts
    ├── 3_NestedIfElse
    │   ├── 1_PositiveAndEven.ts
    │   ├── 2_UppercaseVowel.ts
    │   ├── 3_LargestOf3.ts
    │   ├── 4_MultipleOf5And10.ts
    │   ├── 5.VowelsOrConsonant.ts
    │   └── 6.MultipleOf2And3.ts
    ├── 4_SwitchCase
    │   ├── 1_MonthNumber.ts
    │   ├── 2_ArithmaticOps.ts
    │   └── 3_Season.ts
    ├── 5_While
    │   ├── 1_SumOfNumbers.ts
    │   ├── 2_Factorial.ts
    │   ├── 3_ReverseNumber.ts
    │   ├── 4_PrimeNumber.ts
    │   ├── 5_LargestDigit.ts
    │   └── 6_PallindromeNumber.ts
    ├── 6_DoWhile
    │   ├── 1_Print1To10.ts
    │   └── 2_ArithmaticOperations.ts
    ├── 7_ForLoop
    │   ├── 1_MultipleOf5.ts
    │   ├── 2_PrimeUpto50.ts
    │   ├── 3_SumOfEvenNum.ts
    │   ├── 4_SumOfOdd.ts
    │   ├── 5_PrintTable.ts
    │   ├── 6_DivisibleBy3And5.ts
    │   ├── 7_CountDigit.ts
    │   ├── 8_SumOfDigits.ts
    │   ├── 9_MultipleOfNumber.ts
    │   └── 10_SumOfNEvenNumbers.ts
    ├── 8_Continue
    │   ├── 1_PrintOdd.ts
    │   └── 2_SkipMultipleOf5.ts
    ├── 9_Break
    │   ├── 1_FirstEvenNumber.ts
    │   └── 2_StopAfter15.ts
    └── 10_Array
        ├── 1_AddElementInArray.ts
        ├── 2_DeleteLastElement.ts
        ├── 3_RemoveFirstElement.ts
        ├── 4_AddElementAtBegining.ts
        ├── 5_ConcateTwoArrays.ts
        ├── 6_ExtractSubArray.ts
        ├── 7_InsertAndDeleteUsingSplice.ts
        ├── 8_FindIndexOfElement.ts
        ├── 9_FindElement.ts
        ├── 10_ArrayToString.ts
        ├── 11_PrintElementsInArrayWithForEach.ts
        ├── 12_DoubleTheArrayValues.ts
        ├── 13_FilterOutEvenElement.ts
        ├── 14_SumOfElement.ts
        ├── 15_AtLeastOneEven.ts
        ├── 16_CheckElementsArePositive.ts
        ├── 17_FindDupElement.ts
        ├── 18_ReverseArray.ts
        ├── 19_LengthOfString.ts
        ├── 20_ToUpperCase.ts
        └── 21_ToLowerCase.ts

30 directories, 139 files
```
</details>

```text
.
├── 1_Language_Concepts
│   ├── 1_Introduction
│   ├── 2_TypeScript_Setup_Environment
│   ├── 3_TsVariables
│   ├── 4_DataTypes
│   ├── 5_Operators
│   ├── 6_ConditionalStatments
│   ├── 7_LoopsInTS
│   ├── 8_FunctionPart1
│   ├── 9_FunctionPart2
│   ├── 10_Arrays
│   ├── 11_Tupple
│   ├── 12_AdvanceArrayMethods
│   ├── 13_String
│   └── 14_Objects
└── 2_Interview_Programs
    ├── 1_if
    ├── 2_IfElse
    ├── 3_NestedIfElse
    ├── 4_SwitchCase
    ├── 5_While
    ├── 6_DoWhile
    ├── 7_ForLoop
    ├── 8_Continue
    ├── 9_Break
    └── 10_Array

30 directories, 139 files
```
<!-- END_TREE -->
