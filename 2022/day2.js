const stgs = [
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Z' },
  { A: 'Z' },
  { A: 'Y' },
  { B: 'Z' },
  { C: 'X' },
  { C: 'X' },
  { C: 'X' },
  { C: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { C: 'Y' },
  { C: 'Z' },
  { A: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { B: 'Z' },
  { A: 'X' },
  { A: 'Z' },
  { C: 'Z' },
  { C: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'X' },
  { C: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Z' },
  { B: 'Y' },
  { A: 'Y' },
  { A: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { C: 'Y' },
  { C: 'Z' },
  { A: 'Z' },
  { C: 'Z' },
  { B: 'Y' },
  { A: 'X' },
  { C: 'Z' },
  { A: 'X' },
  { A: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Z' },
  { B: 'X' },
  { C: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { B: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { C: 'Z' },
  { A: 'Z' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { C: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { C: 'Z' },
  { A: 'X' },
  { A: 'X' },
  { A: 'X' },
  { A: 'X' },
  { B: 'Y' },
  { C: 'Z' },
  { B: 'Z' },
  { B: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { C: 'X' },
  { B: 'Y' },
  { C: 'X' },
  { C: 'Z' },
  { B: 'Z' },
  { C: 'Z' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { C: 'Z' },
  { C: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'X' },
  { C: 'Y' },
  { B: 'Z' },
  { C: 'Z' },
  { C: 'Z' },
  { A: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { A: 'Z' },
  { A: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'X' },
  { C: 'Y' },
  { C: 'X' },
  { C: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { A: 'Z' },
  { C: 'Z' },
  { C: 'Z' },
  { A: 'Z' },
  { C: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { C: 'X' },
  { B: 'X' },
  { C: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { A: 'Z' },
  { C: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { A: 'Z' },
  { C: 'X' },
  { C: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { A: 'X' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { C: 'Z' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { C: 'Z' },
  { C: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { A: 'Z' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Z' },
  { B: 'Z' },
  { A: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { C: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { C: 'X' },
  { C: 'X' },
  { B: 'Y' },
  { A: 'Z' },
  { A: 'X' },
  { C: 'Y' },
  { C: 'Y' },
  { C: 'Y' },
  { C: 'X' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'X' },
  { A: 'Z' },
  { B: 'Y' },
  { B: 'Z' },
  { A: 'X' },
  { B: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'X' },
  { C: 'Z' },
  { C: 'Z' },
  { A: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { A: 'Y' },
  { C: 'X' },
  { C: 'Z' },
  { A: 'Z' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { A: 'Z' },
  { C: 'Y' },
  { C: 'X' },
  { C: 'Z' },
  { B: 'X' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { B: 'Y' },
  { A: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { B: 'Y' },
  { A: 'X' },
  { A: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { C: 'Y' },
  { C: 'X' },
  { C: 'X' },
  { B: 'Z' },
  { B: 'Y' },
  { C: 'Y' },
  { C: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { C: 'Z' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { A: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { C: 'Z' },
  { B: 'Y' },
  { C: 'Z' },
  { B: 'Z' },
  { B: 'Z' },
  { A: 'X' },
  { A: 'Z' },
  { C: 'Z' },
  { B: 'Y' },
  { A: 'Y' },
  { C: 'Z' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'X' },
  { B: 'Y' },
  { C: 'Y' },
  { C: 'Y' },
  { C: 'Y' },
  { C: 'X' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { C: 'Z' },
  { B: 'Y' },
  { A: 'Y' },
  { C: 'Y' },
  { B: 'Z' },
  { C: 'X' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { B: 'Z' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Z' },
  { C: 'Z' },
  { C: 'Z' },
  { A: 'X' },
  { A: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { C: 'Y' },
  { B: 'Z' },
  { A: 'Y' },
  { A: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { C: 'Z' },
  { C: 'Z' },
  { C: 'Z' },
  { A: 'Z' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'X' },
  { C: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Z' },
  { A: 'Z' },
  { C: 'Y' },
  { C: 'X' },
  { C: 'X' },
  { B: 'Y' },
  { C: 'Z' },
  { B: 'Z' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { B: 'Z' },
  { A: 'Z' },
  { B: 'Z' },
  { A: 'Z' },
  { B: 'Y' },
  { B: 'X' },
  { B: 'Y' },
  { C: 'Z' },
  { C: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { A: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { A: 'Z' },
  { C: 'Z' },
  { C: 'Y' },
  { A: 'Z' },
  { A: 'Y' },
  { A: 'Y' },
  { A: 'X' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { A: 'X' },
  { C: 'X' },
  { C: 'Z' },
  { B: 'Y' },
  { A: 'Z' },
  { A: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { C: 'Y' },
  { C: 'X' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { C: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'X' },
  { B: 'Z' },
  { A: 'Y' },
  { C: 'Z' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { A: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'X' },
  { C: 'X' },
  { B: 'Z' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'X' },
  { B: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { A: 'X' },
  { A: 'Z' },
  { B: 'Z' },
  { A: 'X' },
  { C: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'X' },
  { A: 'X' },
  { C: 'Y' },
  { C: 'X' },
  { A: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { A: 'X' },
  { A: 'Z' },
  { C: 'X' },
  { C: 'Z' },
  { B: 'Z' },
  { C: 'X' },
  { C: 'X' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { A: 'X' },
  { C: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { B: 'X' },
  { B: 'Y' },
  { C: 'X' },
  { A: 'Z' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { C: 'X' },
  { C: 'X' },
  { B: 'Z' },
  { B: 'Z' },
  { B: 'Z' },
  { B: 'X' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { C: 'Z' },
  { A: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { C: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { C: 'Z' },
  { B: 'Y' },
  { A: 'Y' },
  { A: 'Y' },
  { C: 'Y' },
  { B: 'Z' },
  { B: 'Z' },
  { C: 'X' },
  { B: 'Y' },
  { C: 'X' },
  { B: 'Z' },
  { C: 'Z' },
  { A: 'Z' },
  { A: 'Y' },
  { B: 'Z' },
  { C: 'X' },
  { B: 'Y' },
  { A: 'X' },
  { A: 'Z' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'X' },
  { B: 'Z' },
  { A: 'Z' },
  { B: 'Z' },
  { A: 'X' },
  { A: 'X' },
  { A: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { A: 'X' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Z' },
  { C: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { A: 'Z' },
  { B: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { A: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { C: 'Z' },
  { A: 'X' },
  { A: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { A: 'X' },
  { C: 'Z' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { A: 'X' },
  { A: 'Z' },
  { B: 'Z' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { A: 'Y' },
  { C: 'X' },
  { B: 'Y' },
  { A: 'Z' },
  { C: 'Y' },
  { C: 'X' },
  { A: 'Y' },
  { A: 'Z' },
  { C: 'X' },
  { C: 'Z' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Z' },
  { A: 'X' },
  { C: 'Z' },
  { A: 'X' },
  { B: 'Z' },
  { A: 'Z' },
  { A: 'Z' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { A: 'X' },
  { A: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { A: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { C: 'Y' },
  { A: 'X' },
  { B: 'Y' },
  { A: 'X' },
  { A: 'X' },
  { A: 'Z' },
  { C: 'Y' },
  { A: 'Z' },
  { C: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'X' },
  { B: 'Z' },
  { C: 'Z' },
  { A: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { C: 'Y' },
  { C: 'Z' },
  { A: 'Y' },
  { C: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { A: 'Z' },
  { A: 'X' },
  { B: 'Y' },
  { B: 'Z' },
  { A: 'Z' },
  { A: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { A: 'Y' },
  { A: 'Z' },
  { A: 'Z' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Z' },
  { B: 'Y' },
  { C: 'Z' },
  { A: 'Z' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'X' },
  { C: 'Y' },
  { C: 'Y' },
  { A: 'Z' },
  { A: 'X' },
  { B: 'Y' },
  { A: 'X' },
  { B: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { C: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'X' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { C: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { C: 'Z' },
  { A: 'X' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { A: 'X' },
  { A: 'X' },
  { B: 'X' },
  { C: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Z' },
  { B: 'Z' },
  { A: 'Y' },
  { A: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { C: 'Z' },
  { C: 'X' },
  { A: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { A: 'X' },
  { B: 'Y' },
  { C: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { A: 'X' },
  { C: 'X' },
  { A: 'X' },
  { B: 'Z' },
  { C: 'Y' },
  { A: 'X' },
  { C: 'Y' },
  { A: 'Z' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { C: 'Z' },
  { A: 'Z' },
  { B: 'Z' },
  { B: 'Z' },
  { C: 'Z' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Z' },
  { B: 'Z' },
  { A: 'Y' },
  { B: 'Z' },
  { C: 'Z' },
  { C: 'Y' },
  { C: 'X' },
  { C: 'Z' },
  { C: 'X' },
  { B: 'Y' },
  { A: 'X' },
  { B: 'Z' },
  { B: 'Y' },
  { A: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { C: 'Y' },
  { C: 'Z' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { A: 'X' },
  { B: 'Y' },
  { A: 'X' },
  { B: 'Z' },
  { A: 'Z' },
  { A: 'Z' },
  { B: 'Y' },
  { C: 'Y' },
  { C: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { B: 'Z' },
  { B: 'Z' },
  { C: 'Y' },
  { A: 'Y' },
  { A: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { A: 'X' },
  { B: 'Z' },
  { C: 'X' },
  { B: 'Z' },
  { B: 'Y' },
  { A: 'Y' },
  { A: 'Y' },
  { C: 'Y' },
  { A: 'Z' },
  { B: 'X' },
  { A: 'X' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Z' },
  { C: 'X' },
  { C: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'X' },
  { A: 'Z' },
  { B: 'Z' },
  { B: 'Y' },
  { A: 'Z' },
  { B: 'Z' },
  { B: 'Y' },
  { A: 'Z' },
  { C: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { C: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { B: 'Z' },
  { A: 'Y' },
  { A: 'Y' },
  { C: 'Y' },
  { A: 'Z' },
  { C: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Z' },
  { C: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { A: 'Y' },
  { A: 'X' },
  { C: 'X' },
  { A: 'Y' },
  { C: 'Y' },
  { C: 'X' },
  { B: 'Y' },
  { C: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { A: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { C: 'Y' },
  { C: 'Y' },
  { A: 'X' },
  { B: 'Z' },
  { A: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { C: 'X' },
  { A: 'X' },
  { A: 'X' },
  { C: 'X' },
  { B: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { A: 'Z' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { B: 'Z' },
  { C: 'Y' },
  { A: 'X' },
  { A: 'Y' },
  { C: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { B: 'Z' },
  { C: 'Y' },
  { A: 'Z' },
  { A: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { A: 'X' },
  { B: 'Z' },
  { B: 'X' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { A: 'Y' },
  { C: 'Y' },
  { C: 'Y' },
  { A: 'X' },
  { B: 'Y' },
  { A: 'X' },
  { C: 'X' },
  { A: 'Z' },
  { A: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { A: 'X' },
  { B: 'Z' },
  { A: 'X' },
  { C: 'Y' },
  { C: 'Z' },
  { A: 'X' },
  { B: 'Z' },
  { C: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Z' },
  { B: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { A: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { A: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { A: 'Z' },
  { A: 'Z' },
  { A: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'X' },
  { A: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { C: 'X' },
  { A: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'X' },
  { A: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { C: 'Y' },
  { A: 'X' },
  { C: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { A: 'Y' },
  { C: 'X' },
  { B: 'Y' },
  { C: 'Z' },
  { A: 'X' },
  { B: 'X' },
  { C: 'Z' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'X' },
  { B: 'Z' },
  { C: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { C: 'Y' },
  { C: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Z' },
  { B: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { C: 'X' },
  { A: 'Z' },
  { A: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { B: 'Z' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { A: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { A: 'Z' },
  { C: 'Y' },
  { C: 'Y' },
  { C: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { C: 'Y' },
  { C: 'X' },
  { A: 'Z' },
  { B: 'Z' },
  { B: 'X' },
  { B: 'X' },
  { C: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { A: 'Z' },
  { A: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'X' },
  { B: 'Z' },
  { C: 'Y' },
  { A: 'Z' },
  { C: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { C: 'Y' },
  { A: 'X' },
  { A: 'Z' },
  { C: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { C: 'Y' },
  { C: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { C: 'Y' },
  { A: 'X' },
  { B: 'X' },
  { C: 'X' },
  { C: 'Z' },
  { B: 'Y' },
  { A: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { C: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { A: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { C: 'Z' },
  { C: 'Y' },
  { A: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { C: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { A: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { A: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'X' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { C: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { C: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { B: 'Z' },
  { C: 'Y' },
  { C: 'X' },
  { A: 'X' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { C: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { A: 'Y' },
  { A: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { C: 'Y' },
  { A: 'Y' },
  { A: 'X' },
  { B: 'Z' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { A: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { C: 'Z' },
  { B: 'X' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'X' },
  { A: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { C: 'X' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { C: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { A: 'Z' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Z' },
  { C: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { C: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { A: 'X' },
  { C: 'Y' },
  { C: 'Z' },
  { C: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { C: 'Y' },
  { A: 'Z' },
  { C: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { A: 'X' },
  { A: 'X' },
  { C: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { B: 'Z' },
  { B: 'Z' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { A: 'Z' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { A: 'Z' },
  { A: 'Y' },
  { B: 'Z' },
  { A: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { C: 'Y' },
  { C: 'X' },
  { B: 'Y' },
  { A: 'X' },
  { C: 'Y' },
  { B: 'Z' },
  { C: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { A: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { A: 'X' },
  { B: 'Z' },
  { C: 'Y' },
  { C: 'Y' },
  { A: 'Z' },
  { C: 'Z' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { C: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { C: 'X' },
  { B: 'X' },
  { C: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { C: 'Z' },
  { C: 'Z' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { C: 'Y' },
  { C: 'Z' },
  { C: 'X' },
  { C: 'Y' },
  { C: 'X' },
  { C: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { C: 'Z' },
  { B: 'Y' },
  { A: 'Z' },
  { B: 'Z' },
  { B: 'X' },
  { C: 'Y' },
  { A: 'Y' },
  { C: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { B: 'Y' },
  { C: 'Y' },
  { C: 'X' },
  { C: 'Y' },
  { C: 'X' },
  { B: 'Y' },
  { A: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { C: 'X' },
  { C: 'X' },
  { C: 'X' },
  { C: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { C: 'Z' },
  { C: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { A: 'Z' },
  { C: 'X' },
  { C: 'Y' },
  { C: 'Y' },
  { A: 'X' },
  { C: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Z' },
  { B: 'Z' },
  { B: 'Y' },
  { A: 'Z' },
  { A: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { C: 'Y' },
  { C: 'Z' },
  { A: 'Z' },
  { C: 'Z' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Z' },
  { C: 'Z' },
  { C: 'Y' },
  { A: 'X' },
  { A: 'Y' },
  { B: 'Z' },
  { C: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { C: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { A: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { C: 'X' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'X' },
  { B: 'Y' },
  { B: 'Z' },
  { C: 'Y' },
  { A: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { B: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'X' },
  { B: 'Y' },
  { B: 'X' },
  { B: 'Z' },
  { A: 'X' },
  { C: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { C: 'X' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { C: 'Z' },
  { B: 'Y' },
  { B: 'Z' },
  { A: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { A: 'Z' },
  { A: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'X' },
  { C: 'Y' },
  { B: 'Y' },
  { A: 'X' },
  { B: 'Y' },
  { C: 'Z' },
  { A: 'Z' },
  { B: 'Y' },
  { B: 'X' },
  { A: 'Y' },
  { C: 'Y' },
  { B: 'Z' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { A: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { A: 'X' },
  { C: 'Y' },
  { B: 'Z' },
  { B: 'Z' },
  { B: 'Y' },
  { C: 'Z' },
  { C: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { C: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'X' },
  { B: 'Y' },
  { B: 'Z' },
  { C: 'Z' },
  { B: 'Z' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { C: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { A: 'X' },
  { B: 'Z' },
  { B: 'Y' },
  { C: 'Y' },
  { A: 'X' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Z' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { C: 'Y' },
  { C: 'Y' },
  { B: 'Z' },
  { C: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { A: 'Z' },
  { C: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { B: 'Z' },
  { B: 'Z' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { C: 'Y' },
  { A: 'Z' },
  { C: 'Y' },
  { C: 'Z' },
  { C: 'Z' },
  { A: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { C: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'X' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'X' },
  { C: 'X' },
  { A: 'X' },
  { B: 'Z' },
  { A: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { C: 'Z' },
  { A: 'X' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { A: 'X' },
  { B: 'Z' },
  { C: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { A: 'Y' },
  { A: 'X' },
  { C: 'Y' },
  { B: 'Z' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { C: 'Z' },
  { C: 'Z' },
  { A: 'Z' },
  { A: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { C: 'Y' },
  { C: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'X' },
  { A: 'Y' },
  { C: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { C: 'Z' },
  { C: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'X' },
  { C: 'Z' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { C: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { C: 'X' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { A: 'Y' },
  { C: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { A: 'Z' },
  { A: 'X' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Z' },
  { A: 'Z' },
  { C: 'Y' },
  { A: 'Y' },
  { A: 'X' },
  { C: 'Y' },
  { A: 'Y' },
  { A: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { B: 'Y' },
  { A: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { A: 'X' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { A: 'X' },
  { B: 'Z' },
  { A: 'Y' },
  { A: 'X' },
  { A: 'Z' },
  { C: 'Z' },
  { B: 'Z' },
  { C: 'X' },
  { B: 'Y' },
  { A: 'X' },
  { B: 'Z' },
  { A: 'Z' },
  { B: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { A: 'Z' },
  { C: 'Z' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'X' },
  { B: 'Y' },
  { A: 'X' },
  { B: 'Y' },
  { A: 'Z' },
  { C: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { C: 'X' },
  { C: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'X' },
  { C: 'Z' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { A: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { A: 'X' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { A: 'X' },
  { A: 'X' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { C: 'X' },
  { C: 'Y' },
  { C: 'X' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { C: 'Z' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Z' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { C: 'X' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { A: 'Z' },
  { C: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { A: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'X' },
  { B: 'Z' },
  { A: 'X' },
  { C: 'Z' },
  { B: 'Z' },
  { A: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'X' },
  { A: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { C: 'Z' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { B: 'Z' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { C: 'Z' },
  { C: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Z' },
  { C: 'Y' },
  { C: 'Y' },
  { A: 'Y' },
  { B: 'Z' },
  { C: 'X' },
  { C: 'Y' },
  { C: 'X' },
  { A: 'Z' },
  { A: 'X' },
  { B: 'Y' },
  { C: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { A: 'Z' },
  { B: 'Z' },
  { B: 'X' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'X' },
  { A: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { A: 'Z' },
  { A: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { A: 'X' },
  { C: 'Z' },
  { B: 'Z' },
  { B: 'Z' },
  { B: 'Z' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { B: 'Y' },
  { A: 'Y' },
  { A: 'Z' },
  { B: 'Z' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { C: 'Y' },
  { C: 'X' },
  { B: 'Y' },
  { C: 'Z' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { C: 'X' },
  { C: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'X' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { A: 'Y' },
  { B: 'Y' },
  { A: 'X' },
  { B: 'X' },
  { A: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'X' },
  { A: 'X' },
  { B: 'Y' },
  { B: 'Z' },
  { A: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'X' },
  { A: 'Y' },
  { A: 'Y' },
  { A: 'X' },
  { B: 'Z' },
  { A: 'X' },
  { C: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { A: 'X' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { C: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { A: 'Z' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Z' },
  { A: 'X' },
  { C: 'Z' },
  { B: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { A: 'X' },
  { C: 'Y' },
  { C: 'Z' },
  { A: 'Z' },
  { A: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { C: 'Y' },
  { C: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { A: 'Z' },
  { A: 'X' },
  { C: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'X' },
  { C: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Z' },
  { C: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { C: 'Z' },
  { A: 'X' },
  { A: 'X' },
  { C: 'Z' },
  { A: 'X' },
  { A: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { C: 'Y' },
  { C: 'Z' },
  { A: 'X' },
  { A: 'X' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'X' },
  { B: 'Y' },
  { B: 'Z' },
  { C: 'Y' },
  { C: 'X' },
  { B: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { C: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'X' },
  { A: 'Z' },
  { A: 'X' },
  { C: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { B: 'Z' },
  { C: 'X' },
  { B: 'Y' },
  { C: 'Y' },
  { C: 'Y' },
  { A: 'Z' },
  { C: 'Z' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { A: 'Z' },
  { A: 'Y' },
  { A: 'Y' },
  { A: 'X' },
  { B: 'Z' },
  { C: 'Z' },
  { C: 'X' },
  { B: 'Y' },
  { A: 'X' },
  { C: 'X' },
  { A: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { C: 'X' },
  { B: 'Y' },
  { A: 'Z' },
  { B: 'Z' },
  { B: 'Z' },
  { C: 'Y' },
  { B: 'Y' },
  { C: 'X' },
  { C: 'X' },
  { C: 'Y' },
  { C: 'Y' },
  { C: 'Z' },
  { C: 'X' },
  { B: 'Y' },
  { C: 'Y' },
  { C: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { A: 'Y' },
  { B: 'Z' },
  { A: 'X' },
  { B: 'Y' },
  { A: 'Z' },
  { C: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { A: 'X' },
  { C: 'Z' },
  { B: 'Z' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { B: 'Y' },
  { C: 'Z' },
  { A: 'Z' },
  { C: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { C: 'X' },
  { C: 'X' },
  { A: 'X' },
  { A: 'Y' },
  { B: 'Z' },
  { C: 'Y' },
  { C: 'X' },
  { C: 'X' },
  { C: 'Y' },
  { C: 'X' },
  { B: 'Y' },
  { C: 'X' },
  { A: 'Y' },
  { C: 'Z' },
  { B: 'Y' },
  { B: 'Z' },
  { B: 'Y' },
  { A: 'X' },
  { B: 'Y' },
  { A: 'Z' },
  { A: 'Y' },
  { C: 'X' },
  { A: 'X' },
  { B: 'X' },
  { C: 'X' },
  { C: 'Z' },
  { C: 'X' },
  { A: 'Y' },
  { A: 'Z' },
  { B: 'Y' },
  { A: 'Y' }
];

const tests = [{ A: 'Y' }, { B: 'X' }, { C: 'Z' }];

const wins = [{ C: 'X' }, { B: 'Z' }, { A: 'Y' }];
const draws = [{ A: 'X' }, { B: 'Y' }, { C: 'Z' }];
const loses = [{ A: 'Z' }, { C: 'Y' }, { B: 'X' }];

let points = new Map();
points.set('X', 1).set('Y', 2).set('Z', 3);
let totalPoints = 0;

// ===================== Puzzle 2 =====================

for (const stg of stgs) {
  const key = Object.keys(stg)[0];
  console.log('key --> ', key);
  const value = Object.values(stg)[0];
  console.log('value --> ', value);

  let iPlay;

  switch (value) {
    case 'Z':
      // i won
      iPlay = getHand(key, wins);
      console.log('iPlay win --> ', iPlay);
      totalPoints = totalPoints + 6 + points.get(iPlay);
      break;

    case 'Y':
      // i draw
      iPlay = getHand(key, draws);
      console.log('iPlay draws --> ', iPlay);
      totalPoints = totalPoints + 3 + points.get(iPlay);
      break;

    case 'X':
      // i lost
      iPlay = getHand(key, loses);
      console.log('iPlay lose --> ', iPlay);
      totalPoints = totalPoints + points.get(iPlay);
      break;
  }

  console.log('totalPoints --> ', totalPoints);
}

function getHand(key, array) {
  const val = array.find((item) => {
    return item[key];
  });

  return Object.values(val)[0];
}

console.log(totalPoints);

// ===================== Puzzle 1 =====================
// for (const stg of stgs) {
//   const key = Object.keys(stg)[0];
//   const value = Object.values(stg)[0]; // this is what i am playing

//   const isWin = wins.some((item) => item[key] === value);

//   if (isWin) {
//     totalPoints = totalPoints + 6 + points.get(value);
//   }

//   const isDraw = draws.some((item) => item[key] === value);

//   if (isDraw) {
//     totalPoints = totalPoints + 3 + points.get(value);
//   }

//   const isLose = loses.some((item) => item[key] === value);

//   if (isLose) {
//     totalPoints += points.get(value);
//   }
// }

// console.log(totalPoints); // 13052
