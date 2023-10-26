/*
 * Greeting utilities
 */

import { getPeriod } from './date'
import { starters } from '../assets/starters'
import { words } from '../assets/words'

export function getStarter(period = getPeriod()) {
  // Choose any starter from the period or general
  const periodStarters = starters[period]
  const generalStarters = starters['general']
  const allStarters = periodStarters.concat(generalStarters)
  const randomIndex = Math.floor(Math.random() * allStarters.length)
  return allStarters[randomIndex]
}

export function getWord(wordGender = 'm') {
  // Choose any word
  const randomIndex = Math.floor(Math.random() * words.length)
  let word = words[randomIndex]
  // Handle word gender
  if (wordGender === 'f') {
    // If it ends with 'r', just add 'a'
    if (word.slice(-1) === 'r') {
      word += 'a'
    }
    // Else, switch last letter to 'a'
    else {
      word = word.slice(0, -1) + 'a'
    }
  } else if (wordGender === 'm') {
    // If it doesn't end with 'r', switch last letter to 'o'
    if (word.slice(-1) !== 'r') {
      word = word.slice(0, -1) + 'o'
    }
  }
  return word
}

export function getGreetingMessage(
  options = {
    wordGender: 'm',
    period: getPeriod(),
    addExclamation: true,
    addMy: false
  }
) {
  const greetingOptions = {
    wordGender: 'm',
    period: getPeriod(),
    addExclamation: true,
    addMy: false,
    ...options
  }
  const starter = getStarter(greetingOptions.period)
  const my = greetingOptions.addMy
    ? greetingOptions.wordGender === 'm'
      ? 'meu '
      : greetingOptions.wordGender === 'f'
      ? 'minha '
      : ''
    : ''
  const word = getWord(greetingOptions.wordGender)
  const exclamation = greetingOptions.addExclamation ? '!' : ''
  return `${starter}, ${my}${word}${exclamation}`
}
