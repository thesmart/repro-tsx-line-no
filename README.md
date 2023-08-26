# Reproduce line number bug for `tsx` module

Install `nvm`[https://github.com/nvm-sh/nvm].

```
$ nvm install 18
$ nvm install 20
```

 Switch to Node v20, run the test:
```
$ nvm use 20
$ node --loader tsx --no-warnings --test index.test.ts
  Error: is the line number right?
      at SomeLib.doSomething (file:///Users/smart/thesmart/repro-tsx-line-no/lib.ts:1:149)
      at TestContext.<anonymous> (file:///Users/smart/thesmart/repro-tsx-line-no/index.test.ts:1:121)
```

Switch to node v18, run the test:
 ```
 $ nvm use 18
 $ node --loader tsx --no-warnings --test index.test.ts
  Error: is the line number right?
      at SomeLib.doSomething (/Users/smart/thesmart/repro-tsx-line-no/lib.ts:3:11)
      at TestContext.<anonymous> (/Users/smart/thesmart/repro-tsx-line-no/index.test.ts:7:5)
 ```

The line numbers in v20 are wrong.
