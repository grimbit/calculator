import React, { useState } from 'react';
import {
  Button,
  GridWrapper,
  AppPage,
  StrechWrapper,
  CalcForm,
  FrameStyle,
  Uwudiv,
  SymbolView
} from './App.styles';

const App = () => {
  const [entryNum, setEntryNum] = useState('');
  const [memoryNum, setMemoryNum] = useState<number>(0);
  const [symbol, setSymbol] = useState('');

  const reduce = (x?: any) => {
    if (x % 1 !== 0) {
      return x.toFixed(4);
    } else {
      return x;
    }
  };
  const computeSwitch = (a: string) => {
    if (entryNum.length > 0) {
      switch (a) {
        case '+':
          setSymbol('+');
          setEntryNum('');
          setMemoryNum(parseFloat(entryNum));
          break;
        case '-':
          setSymbol('-');
          setEntryNum('');
          setMemoryNum(parseFloat(entryNum));
          break;
        case 'x':
          setSymbol('x');
          setEntryNum('');
          setMemoryNum(parseFloat(entryNum));
          break;
        case '/':
          setSymbol('/');
          setEntryNum('');
          setMemoryNum(parseFloat(entryNum));
          break;
        case '%':
          setSymbol('%');
          setEntryNum('');
          setMemoryNum(parseFloat(entryNum));
          break;
        default:
          setEntryNum(entryNum);
          break;
      }
    }
  };

  const compute = () => {
    if (entryNum.length > 0) {
      switch (symbol) {
        case '+':
          setEntryNum(reduce(memoryNum + parseFloat(entryNum)).toString());
          break;
        case '-':
          setEntryNum(reduce(memoryNum - parseFloat(entryNum)).toString());
          break;
        case '/':
          setEntryNum(reduce(memoryNum / parseFloat(entryNum)).toString());
          break;
        case 'x':
          setEntryNum(reduce(memoryNum * parseFloat(entryNum)).toString());
          break;
        case '%':
          setEntryNum(
            reduce((parseFloat(entryNum) / 100) * memoryNum).toString()
          );
          break;
        default:
          setEntryNum(entryNum);
          break;
      }
    }
  };

  const reset = () => {
    setEntryNum('');
    setMemoryNum(0);
    setSymbol('');
  };

  const calc = (n?: any) => {
    if (entryNum.length < 12 && !isNaN(parseFloat(n))) {
      setEntryNum(entryNum + n.toString());
    } else if (entryNum.length < 12 && !entryNum.includes('.')) {
      setEntryNum(entryNum + n);
    }
  };

  return (
    <FrameStyle>
      <AppPage>
        <Uwudiv>{memoryNum}</Uwudiv>
        <GridWrapper>
          <CalcForm>
            <SymbolView>{symbol}</SymbolView>
            {entryNum}
          </CalcForm>
          <StrechWrapper>
            <Button onClick={reset} special>
              C
            </Button>
          </StrechWrapper>

          <Button special onClick={() => computeSwitch('%')}>
            %
          </Button>
          <Button special onClick={() => computeSwitch('/')}>
            ÷
          </Button>
          <Button onClick={() => calc(7)}>7</Button>
          <Button onClick={() => calc(8)}>8</Button>
          <Button onClick={() => calc(9)}>9</Button>
          <Button special onClick={() => computeSwitch('x')}>
            x
          </Button>

          <Button onClick={() => calc(4)}>4</Button>
          <Button onClick={() => calc(5)}>5</Button>
          <Button onClick={() => calc(6)}>6</Button>
          <Button special onClick={() => computeSwitch('-')}>
            -
          </Button>

          <Button onClick={() => calc(1)}>1</Button>
          <Button onClick={() => calc(2)}>2</Button>
          <Button onClick={() => calc(3)}>3</Button>

          <Button special onClick={() => computeSwitch('+')}>
            +
          </Button>

          <StrechWrapper>
            <Button onClick={() => calc(0)}>0</Button>
          </StrechWrapper>

          <Button special onClick={() => calc('.')}>
            .
          </Button>
          <Button special onClick={() => compute()}>
            =
          </Button>
        </GridWrapper>
      </AppPage>
    </FrameStyle>
  );
};
export default App;
