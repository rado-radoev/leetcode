/*
1592. Rearrange Spaces Between Words
You are given a string text of words that are placed among some number of spaces. Each word consists of one or more lowercase English letters and are separated by at least one space. It's guaranteed that text contains at least one word.

Rearrange the spaces so that there is an equal number of spaces between every pair of adjacent words and that number is maximized. If you cannot redistribute all the spaces equally, place the extra spaces at the end, meaning the returned string should be the same length as text.

Return the string after rearranging the spaces.


Example 1:
Input: text = "  this   is  a sentence "
Output: "this   is   a   sentence"
Explanation: There are a total of 9 spaces and 4 words. We can evenly divide the 9 spaces between the words: 9 / (4-1) = 3 spaces.

Example 2:
Input: text = " practice   makes   perfect"
Output: "practice   makes   perfect "
Explanation: There are a total of 7 spaces and 3 words. 7 / (3-1) = 3 spaces plus 1 extra space. We place this extra space at the end of the string.


Constraints:
1 <= text.length <= 100
text consists of lowercase English letters and ' '.
text contains at least one word

Pseudo:
find number of spaces
find number of words
space / (words - 1) = space_between_words  ---- Math.trunc()
is there a remainder = space % (words-1)
*/

let a = ['hello']
a.reduce((prev, curr, index, arr) => {
  console.log("prev", prev)
  console.log("curr", curr)
  console.log("index", index)
  console.log("arr", arr)
}, a[0])

let regex = /\s+|(\w+)/g
let text = "hello   world"
// let text = "  jhbqunnzo "
const resultsArr = [...text.matchAll(regex)]

let spaces = 0;

// Edge case where only one word
if (resultsArr.length => 2 and resultsArr.length <= 3) {
  const res = resultsArr
  .map(line => line[0])
  .filter(entry => {
    entry.startsWith(' ') ? spaces += (entry.length) : spaces
    return !entry.startsWith(' ')
  })
}


const res = resultsArr
  .map(line => line[0])
  .filter(entry => {
    entry.startsWith(' ') ? spaces += (entry.length) : spaces
    return !entry.startsWith(' ')
  })
  .flat()
  .reduce((prev, curr, index, array) => {
    const wordsCount = array.length > 1 ? array.length - 1 : array.length

    let newstr = `${prev}${' '.repeat(spaces / wordsCount )}${curr}`;
    if (index + 1 === array.length) { return `${newstr}${' '.repeat(spaces % wordsCount)}` }

    return newstr
  })
return res;
  // console.log(res)
// return res;

// let spaces = words = 0;
// let modArr = arr.filter(arr => {
//   let [match, group, ...rest] = arr;
//   // if the match is part of a group (not undefined)
//   // it is a word
//   // increment words
//   words += group && 1
//   // if group is undefined
//   // it is a space. get length and add to spaces
//   group ?? ( spaces += match.length )
//   if (group) {return group}
// }).reduce((prev, curr, ind) => {
//   console.log(prev)
//   console.log(curr)
// })



// let modArr = arr.filter(arr => {
//   let [match, group, ...rest] = arr;
//   // if the match is part of a group (not undefined)
//   // it is a word
//   // increment words
//   words += group && 1
//   // if group is undefined
//   // it is a space. get length and add to spaces
//   group ?? ( spaces += match.length )
//   if (group) {return group}
// }).reduce((acc, words, index) => {
//   let newstring = acc;
//   console.log(index)

//   console.log(words)
//   let w = words[0]

//   console.log(w)

//   if (acc && acc.length === 0) {acc += w.padEnd(spaces / (words - 1), ' ')}
//   else { acc += w.padStart(spaces / (words - 1), ' ')}

//   console.log(acc)
//   if (index === words) {
//     let remainder = spaces % (words - 1);
//     remainder > 0 ? acc.padEnd(remainder, ' ') : ''
//   }
//   return newstring;
// })

// // should have done a fucking for loop


// let newArr = arr.map(arr => arr).flatMap(newarr => {
//   console.log(newarr)
//   let [, space, word ] = newarr;
//     console.log("space:" + space.length)
//     console.log("word:" + word)
//     spaces += space.length ?? spaces;
//     words += word && 1
//     console.log("spaces:" + spaces)
//     console.log("words:" + words)
// })
