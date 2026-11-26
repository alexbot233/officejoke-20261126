const jokes: readonly (readonly string[])[] = [
  [
    "HR said my growth area was 'saying no more effectively.'",
    "I said, 'No.'",
    "She wrote 'initial resistance' — then put me in charge of the change pilot.",
  ],
  [
    "'Quick question' in Slack at 4:58 on a Friday.",
    "By message 63 we'd debated sourdough and named someone's dog.",
    "The question? 'Are you still there?'",
  ],
  [
    "The printer's been 'temporarily unavailable' since March.",
    "I filed six tickets.",
    "It's the only one on this floor with boundaries.",
  ],
];

for (const [index, joke] of jokes.entries()) {
  if (index > 0) console.log();
  console.log(joke.join("\n"));
}
