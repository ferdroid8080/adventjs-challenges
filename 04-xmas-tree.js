function createXmasTree(height) {
  let tree = '';
  let i = 1;
  while (i <= height) {
    const space = '_'.repeat(height - i);
    const bottom = '_'.repeat(height - 1);
    const leafs = '*'.repeat(i * 2 - 1);
    tree += `${space + leafs + space}\n`;
    if (i === height)
      tree += `${bottom + '#' + bottom}\n`.repeat(2);
    i++;
  }
  return tree.trim();
}

createXmasTree(5)
