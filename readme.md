# Pair Programming exercise

Write an function that converts time into the corresponding english words - eg. '8:30' -> 'half past eight'

## Examples

- '0:00' > 'midnight'
- '12:00' > 'midday'
- '2:00' > 'two o'clock'
- '2:03' > 'three past two'
- '2:11' > 'eleven past two'
- '2:15' > 'quarter past two'
- '2:30' > 'half past two'
- '2:33' > 'twenty seven to three'
- '2:40' > 'twenty to three'
- '2:45' > 'quarter to three'
- '2:55' > 'five to three'

24 hours format = Yes

Assuming: no spaces
Split :

h|m

Convert h|m to int

m == 0 = h o'clock (00 | 12 use the words given above)

m < 15 = m past h

m == 15 = quarter past h

m > 15 < 30 = yy past zz

m == 30 = half past h

m > 30 != 45 = m to h+1 (take the next hour)

m == 45 = quarter to h+1 (take the next hour)
