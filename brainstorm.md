# Brainstorm

1. I want the CardList to randomize the order of its images on each render.
   The Fisher-Yates Shuffle seems appropriate for shuffling the array.

2. The CardList component should handle the rendering of the cards.

3. Maybe the score should be kept in the App component, or another component dedicated to handling the score and updating it based on the game state. However, modifying the score must trigger a shuffling and re-render of the cards...
