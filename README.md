## Custom Card Maker for Chaos Galaxy
### Basic Features
Editing text - Click to edit most text on cards, except for the planet on creatures.
Title - The title of the card
Card Text - The rules text of a card
Card Type - The type of a card (Resource, Creature, Attachment, Activator); I'm planning to ideally add Planet soon as well. Changing the value on the dropdown changes the rules text's vertical offset and the main card's image. It also removes elements specific card types (ex: removes power and health text when not on creature or the activation condition text when not on an activator).
Art - Clicking on the input will prompt a browse dialogue to pop up. An image inserted will be stretched/distorted to fit the correct size and may appear weird. Consider using square or close to square sized images.
Colored Text - This is used when referring to either archetypes or the planet name itself. WARNING!!!! The button inserts a space *after* the colored text. You need to go to the very end to avoid typing in the style of the colored text.
### Creature-Specific Features
Power/Health - The power and health of a card. Despite being numbers, other characters are allowed to be typed in.
Star Cost - How many stars the creature costs. On select just updates the image of the correct star count.
Planet Input - Control which planet the creature comes from. Updates the main card image to the creature of the chosen planet.
### Activator-Specific Features
Activation Condition - Type in the activation condition of the card; Uses a quite different style than normal text.
Lines Input - Controls how many lines the *activation condition* has, not the actual card text (I'll put a WARNING!!!! for this as well)
### Advanced Features
Title/Rules text size - Controls the `font size` property in css for the title and card text respectively.
Title/Rules text vertical offset - Controls the css `top` property (`position` is set to `absolute`) for the title and card text respectively
Rules text line spacing - Controls the css `line-spacing` property for the card text
WARNING!!! All of these values are px
