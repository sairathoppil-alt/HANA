export const story = {
  opening: 'I met you for the first time in 11th standard, at TalentsIndia.\n\nAt first, I genuinely thought you were the serious, studious type — quiet, reserved, and probably someone I would be way too scared to randomly go up and talk to.\n\nYou always seemed so focused that I wasn\'t even sure how to approach you.',
  impression: { title: 'my first impression of you...', text: 'I thought you were SO serious and studious 😭\n\nYou were quiet, reserved and somehow intimidating enough that I was genuinely scared to approach you.', note: 'little did I know...' },
  turningPoint: { title: 'and then came JEE Advanced...', text: 'Once our JEE Advanced classes started, I slowly got to know you better.\n\nAnd somewhere between all those classes, conversations and random moments, you stopped being someone I was scared to talk to...', continuation: '...and became someone I never wanted to lose. ♡' },
  now: { title: 'look at us now ♡', text: "It's kind of crazy to think that the girl I was once too scared to approach became one of the most important people in my life.\n\nI genuinely can't imagine my life without you now.", quiet: 'Funny how friendships can begin so quietly.', ending: 'and somehow become everything. ♡' }
}

export const timeline = [
  { label: '11th standard', doodle: 'calendar', caption: 'the year it all began' },
  { label: 'TALENTSINDIA', doodle: 'notebook', caption: 'first meeting' },
  { label: 'first impression', doodle: 'face', caption: 'so serious. so studious.' },
  { label: 'JEE Advanced classes', doodle: 'pencil', caption: 'JEE era...' },
  { label: 'getting to know each other', doodle: 'flower', caption: 'the quiet becoming familiar' },
  { label: 'best friends', doodle: 'heart', caption: 'the beginning of everything' }
]

const photo = (src, caption, rotation, type = 'polaroid', size = 'auto', ratio = 'auto') => ({ src, caption, rotation, type, size, ratio })

export const collegeYearOne = {
  photos: [
    photo('/photos/c1.jpeg', 'our first college era ♡', -4), photo('/photos/c2.jpeg', 'why were we like this', 3),
    photo('/photos/c3.jpeg', 'core memory', -2, 'square'), photo('/photos/c4.jpeg', 'literally us', 5),
    photo('/photos/c5.jpeg', 'one of my favorites', -5), photo('/photos/c6.jpeg', 'still makes me smile', 2),
    photo('/photos/c7.jpeg', 'another one for the scrapbook', -3)
  ],
  memories: ['new place, same two idiots', 'long walks between classes', 'the beginning of everything']
}

export const collegeYearTwo = {
  photos: [
    photo('/photos/c8.jpeg', 'look at us now ♡', 0, 'large'), photo('/photos/c9.jpeg', 'this one makes me laugh every time', -5),
    photo('/photos/c10.jpeg', 'another core memory', 4), photo('/photos/c11.jpeg', 'us being us', -3),
   
  ],
  changes: ['new places', 'new people', 'new memories', 'same us ♡']
}

export const cameraRoll = {
  photos: [
    photo('/photos/cr1.jpeg', '???', -6), photo('/photos/cr2.jpeg', 'HELP', 4, 'square'), photo('/photos/cr3.jpeg', 'girl 😭', 2),
    photo('/photos/cr4.jpeg', 'why', -3, 'landscape'), photo('/photos/cr5.jpeg', 'literally us', 5), photo('/photos/cr6.jpeg', 'this was a good day', -2),
    photo('/photos/cr7.jpeg', 'core memory', 3, 'strip'), photo('/photos/cr8.jpeg', 'never again', -5), photo('/photos/cr9.jpeg', 'we need to recreate this', 2),
    photo('/photos/cr10.jpeg', 'my favorite idiots ♡', -4), photo('/photos/cr11.jpeg', 'caught in 4k', 6, 'square'), photo('/photos/cr12.jpeg', 'no explanation needed', -2)
  ]
}

export const scrapbookImages = {
  cover: '/photos/cover.jpeg',
  final: '/photos/final.png'
}

export const videoMoments = {
  chapter: 'chapter five',
  title: 'little moments',
  subtitle: 'some memories are better in motion.',
  videos: [
    { src: '/video/v1.mp4', caption: 'just us being us' },
    { src: '/video/v2.mp4', caption: 'a memory I wish I could keep forever' },
    { src: '/video/v3.mp4', caption: 'proof that we actually have fun sometimes 😭' },
    { src: '/video/v4.mp4', caption: 'another little moment ♡' },
    { src: '/video/v5.mp4', caption: 'one I wish I could keep forever' }
  ]
}

export const letter = {
  greeting: 'Dear Hana,',
  body: `I don't think I ever really expected that the quiet girl I met at TalentsIndia in 11th standard would eventually become one of the most important people in my life.

When I first saw you, I thought you were this incredibly serious, studious and slightly intimidating person. I was genuinely too scared to just walk up and talk to you.

And then somehow, somewhere between JEE classes, college, random conversations, stupid jokes and all the little moments in between, you became my person.

We've been through so many versions of ourselves already.

We've grown up together, complained together, laughed until things stopped making sense, survived stressful days, made memories out of completely ordinary moments, and somehow kept finding our way back to each other.

There are so many memories I wish I had pictures of.

But maybe that's okay.

Because some of my favorite moments with you are the ones that only exist in my head — the random conversations, the stupid jokes, the tiny moments that probably meant nothing to anyone else but somehow meant everything to me.

Thank you for being there through all of it.

Thank you for being someone I can be completely myself around.

Thank you for making ordinary days feel like memories worth keeping.

I genuinely can't imagine my life without you anymore.

And if these past few years have taught me anything, it's that I don't want this scrapbook to end here.

I want more ridiculous pictures.

More inside jokes.

More random plans.

More late conversations.

More memories we forget to take pictures of.

More years of us.

Happy birthday, my favorite person.

I love you more than this tiny scrapbook could ever fit.

Here's to everything we've already been through,

and everything we haven't even imagined yet. ♡`,
  signoff: 'love always,\n\nSaira ♡'
}

export const birthday = {
  messages: ['more memories', 'more chaos', "more laughing at things that aren't funny", 'more pictures', 'more inside jokes', 'more YOU ♡'],
  photo: photo('/photos/final.jpeg', 'our favorite chapter', 2)
}

export const hanaSummoning = {
  chapter: 'chapter five',
  title: 'THE HANA SUMMONING RITUAL',
  subtitle: 'a completely normal and scientifically proven method of locating Hana',
  ritualSteps: [
    { text: 'wheres hana', doodle: '⌕' },
    { text: 'she dead', doodle: '☻' },
    { text: 'went boom', doodle: 'BOOM' },
    { text: 'ashes now', doodle: '▪' },
    { text: 'flying away in the wind', doodle: '〰' }
  ],
  screenshots: [
    { src: '/photos/ss1.jpeg', caption: 'EVIDENCE #01', note: 'the disappearance of Hana', rotation: -3 },
    { src: '/photos/ss2.jpeg', caption: 'EVIDENCE #02', note: 'the ritual worked again.', rotation: 4 },
    { src: '/photos/ss3.jpeg', caption: 'EVIDENCE #03', note: 'she has been successfully summoned.', rotation: -2 },
    { src: '/photos/ss4.jpeg', caption: 'EVIDENCE #04', note: 'a flawless return.', rotation: 3 },
    { src: '/photos/ss5.jpeg', caption: 'EVIDENCE #05', note: 'summoning remains undefeated.', rotation: -2 }
  ],
  bottomNote: 'Results may vary.\n\nRitual has a 100% success rate so far. ♡'
}

export const hanaLife = {
  title: 'Hana through the years',
  subtitle: 'a tiny timeline of the girl who somehow grew up this fast ♡',

  photos: [
    {
      src: '/photos/h1.jpeg',
      caption: 'tiny Hana has entered the chat ♡',
      stage: 'baby'
    },
    {
      src: '/photos/h2.jpeg',
      caption: 'small, cute, and already causing trouble',
      stage: 'baby'
    },
    {
      src: '/photos/h3.jpeg',
      caption: 'the tiny human era',
      stage: 'baby'
    },
    {
      src: '/photos/h4.jpeg',
      caption: 'and somehow this became the person we know now ♡',
      stage: 'baby'
    },
    {
      src: '/photos/h5.jpeg',
      caption: 'school days — the beginning of another chapter',
      stage: 'school'
    },
    {
      src: '/photos/h6.jpeg',
      caption: 'growing up, one memory at a time',
      stage: 'now'
    },
    {
      src: '/photos/h7.jpeg',
      caption: 'okayyy look at you now ♡',
      stage: 'now'
    },
    {
      src: '/photos/h8.jpeg',
      caption: 'somehow getting cooler with time',
      stage: 'now'
    },
    {
      src: '/photos/h9.jpeg',
      caption: 'one of my favorite versions of you',
      stage: 'now'
    },
    {
      src: '/photos/h10.jpeg',
      caption: 'current Hana: still unmistakably Hana',
      stage: 'now'
    },
    {
      src: '/photos/h11.jpeg',
      caption: 'more memories, more chaos ♡',
      stage: 'now'
    },
    {
      src: '/photos/h12.jpeg',
      caption: "look how far you've come",
      stage: 'now'
    },
    {
      src: '/photos/h13.jpeg',
      caption: 'and somehow, this is only the beginning ♡',
      stage: 'now'
    }
  ]
}