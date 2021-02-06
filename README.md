<img src="https://www.seekpng.com/png/detail/218-2188461_thinking-meme-png-thinking-meme-with-cup.png" alt="Thinking Meme Png - Thinking Meme With Cup@seekpng.com">

# apakah

Type check your variables

### Installation
`npm install apakah`

### Documentation

1. apakah.string

Check if type is string

```js
console.log(apakah.string('123')) // true
```

2. apakah.num

Check if type is number

```js
console.log(apakah.num(321)) // true
```

3. apakah.bool

Check if type is boolean

```js
console.log(apakah.bool(false)) // true
```

4. apakah.func

Check if type is function

```js
function hello() {
   return 'world';
}
console.log(apakah.func(hello)) // true
```

5. apakah.obj

Check if type is object

```js
const schema = {
   hello: apakah.string,
}

const match = obj(schema);

console.log(match({
  hello: 'world',
})) // true
```

6. apakah.arr

Check if type is array

```js

const match = arr([1, 2]);

console.log(match) // true
```

6. apakah.date

Check if type is array

```js

const match = date(new Date());

console.log(match) // true
```

7. apakah.and
This function can be combined with any other validator. This is most useful for testing multiple condition that has to be true
```js
const arrayWithLengthOf5 = apakah.and(apakah.arr, (item) => item.length === 5);
arrayWithLengthOf5([1, 2]) // false
arrayWithLengthOf5('string') // false
arrayWithLengthOf5([12, 3, 54, 6, 21]) // true
```

8. apakah.or
This function can be combined with other validator. This variant of function will return true if any of the validator is truthy
```js
const stringOrNum = apakah.or(apakah.string, apakah.num)
stringOrNum(5) // true
stringOrNum('hello') // true
stringOrNum({}) // false
```
