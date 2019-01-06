# Summing Grid

### Running the code
This was created using CRA, so you can run with the following:
```
yarn install
yarn start
```

Also, I wrote some (very) basic tests with Jest & Enzyme.  They can be run with:
```
yarn test
```

### Some things I'd add soon
* Make the number formatting more robust.  In particular, I'd format the numbers returning to the InputCells from the store into a comma-delimited format.  
* More tests(!), especially on the SumGrid component  
* Linting   

### Quick notes
* Apparently the abbreviations differ with respect to their use.  I relied on this one: [International System of Units](https://en.wikipedia.org/wiki/International_System_of_Units).  
* I could have just stashed the state within the SumGrid component, but naturally I wanted to avoid state like that within a component.  Another consideration would be use to Context, but I don't feel that fits well here.  For one thing, it would have made the grid components less re-usable--and I do think there's a lot of potential for reusability here.  So I went with a Redux store.  In some ways it feels a little like overkill, as Redux sometimes does.  But I think it's the way to go in this case.  It provides a fair amount of structure and reusability.
