import React from 'react';
import {
  sumRow,
  cleanNumericInput,
  abbreviateNumber,
} from './';

test('sumRow() sums passed values', () => {
  expect(sumRow([1, 2, 3, -4])).toBe(2);
});

test('sumRow() returns a sum of 0 if passed an empty array', () => {
  expect(sumRow([])).toBe(0);
});

test('cleanNumeicInput() removes unwanted characters', () => {
  expect(cleanNumericInput('-45f.,60#98')).toBe('-45.6098');
});

test('abbreviateNumber() returns a value with no suffix if less than 1000', () => {
  expect(abbreviateNumber('101')).toBe('101');
});

test('abbreviateNumber() returns a value with 3 digits by default', () => {
  expect(abbreviateNumber('10')).toBe('10.0');
});

test('abbreviateNumber() returns a value with 4 digits if supplied', () => {
  expect(abbreviateNumber('10', 4)).toBe('10.00');
});

test('abbreviateNumber() returns a value with the thousands suffix', () => {
  expect(abbreviateNumber('-19827')).toBe('-19.8k');
});

test('abbreviateNumber() returns a value with the millions suffix', () => {
  expect(abbreviateNumber('-198272323')).toBe('-198M');
});
