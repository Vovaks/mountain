export default [{
  '_id': {
    '$oid': '5d5517e6b9e9b2b334044868'
  },
  'action_id': 'other transfers',
  'script': 'main',
  'wait_for_input': true,
  'text': [
    'Payments to/from around the globe take 2-3 business days рџ•°пёЏ'
  ],
  'intent': 'other transfers',
  'button': [],
  'quick': [],
  'intro': false,
  'outro': false
},
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b33404486a'
    },
    'action_id': 'InquiryWho',
    'script': 'chat ENG',
    'wait_for_input': false,
    'text': [
      'I\'m a hidden Customer Assistant. The automated customer support. Here to help you out. I currently speak one language but am taking other language lessons at school рџЊђ'
    ],
    'intent': 'InquiryWho',
    'delay': '0',
    'button': [
      {
        'title': 'New button',
        'payload': ''
      }
    ],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b33404486d'
    },
    'action_id': 'what is IBAN',
    'script': 'main',
    'wait_for_input': true,
    'text': [
      'IBAN is the International Bank Account Number identifying your bank account from everyone else\'s. You can find it in the online bank account under "Accounts" and it has 2 letters and several numbers рџ’ё рџ’ё рџ’ё'
    ],
    'intent': 'what is IBAN',
    'button': [
      {
        'title': 'Read more about IBAN',
        'url': 'https://en.wikipedia.org/wiki/International_Bank_Account_Number'
      }
    ],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b33404486f'
    },
    'action_id': 'poland to poland payment',
    'script': 'main',
    'wait_for_input': true,
    'text': [
      'The payment takes \u003cvariable\u003e  hours to arrive on the same weekday.'
    ],
    'intent': 'poland to poland payment',
    'delay': '0',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044871'
    },
    'action_id': 'open an account',
    'script': 'main',
    'wait_for_input': true,
    'text': [
      'To open an account you should go to our New Accounts page. For opening an account рџ§ѕ you need to have your ID code present. Click the link below to proceed рџ‘‡'
    ],
    'intent': 'open an account',
    'delay': '0',
    'button': [
      {
        'title': 'Open an account рџ’µ',
        'url': 'https://www.lhv.ee/registration/cob/index.cfm?l3=en'
      }
    ],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044873'
    },
    'action_id': 'WhatTime gif',
    'script': 'chat ENG',
    'wait_for_input': true,
    'text': [
      ''
    ],
    'intent': 'WhatTime gif',
    'image': 'https://media.giphy.com/media/3ov9k3rACSEHTNNB8k/giphy.gif',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044875'
    },
    'action_id': 'WhereLive gif',
    'script': 'chat ENG',
    'wait_for_input': true,
    'text': [
      ''
    ],
    'intent': 'WhereLive gif',
    'image': 'https://media.giphy.com/media/3EfgWHj0YIDrW/giphy.gif',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044877'
    },
    'action_id': 'test',
    'script': 'main',
    'wait_for_input': true,
    'text': [
      'How are my test results so far? :)'
    ],
    'intent': 'test',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false,
    'router': {
      '\\u002e*': 'main.answer'
    }
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044879'
    },
    'action_id': 'Name',
    'script': 'chat ENG',
    'wait_for_input': false,
    'text': [
      'I\'m the Assistant. Nice to meet you рџ‘‹'
    ],
    'intent': 'Name',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b33404487d'
    },
    'action_id': 'contact customer support yes',
    'script': 'main',
    'wait_for_input': false,
    'text': [
      'Sure thing! My human colleague will chat with you in a moment ...'
    ],
    'intent': 'contact customer support yes',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044880'
    },
    'action_id': 'WhereLive',
    'script': 'chat ENG',
    'wait_for_input': false,
    'text': [
      'Inside this chat. I have my own space here and a lounge where I hang out with other robots. They usually come by over the weekend рџЋ‰ рџҐ‚'
    ],
    'intent': 'WhereLive',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false,
    'router': {
      '\\u002e*': 'chat ENG.WhereLive gif'
    }
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044883'
    },
    'action_id': 'poland to EU payment',
    'script': 'main',
    'wait_for_input': true,
    'text': [
      'The payment takes 24 hours to arrive рџЏЄ'
    ],
    'intent': 'poland to EU payment',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044886'
    },
    'action_id': 'GoodBye',
    'script': 'chat ENG',
    'wait_for_input': false,
    'text': [
      'Bye! рџ‘‹ рџ‘‹ рџ‘‹',
      ''
    ],
    'intent': 'GoodBye',
    'delay': '0',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044889'
    },
    'action_id': 'WhatLookLike',
    'script': 'chat ENG',
    'wait_for_input': false,
    'text': [
      'Tall and with a big smile рџ„ рџ„ рџ„'
    ],
    'intent': 'WhatLookLike',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b33404488c'
    },
    'action_id': 'video identification',
    'script': 'main',
    'wait_for_input': true,
    'text': [
      'Our modern technology allows us to open an account via video as well рџ“№  To do that make sure you use Google Chrome or Internet Explorer browser and go to the link below to start authentication.'
    ],
    'intent': 'video identification',
    'button': [
      {
        'title': 'Go to video authentication',
        'url': 'https://www.lhv.ee/en/videoidentification'
      }
    ],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b33404488e'
    },
    'action_id': 'Insult',
    'script': 'chat ENG',
    'wait_for_input': false,
    'text': [
      'Whoa, take it easy. We\'re all friends here рџ„'
    ],
    'intent': 'Insult',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044890'
    },
    'action_id': 'WhatTime',
    'script': 'chat ENG',
    'wait_for_input': false,
    'text': [
      'Time to get yourself a watch my friend.'
    ],
    'intent': 'WhatTime',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false,
    'router': {
      '\\u002e*': 'chat ENG.WhatTime gif'
    }
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044892'
    },
    'action_id': 'InquiryDoing',
    'script': 'chat ENG',
    'wait_for_input': false,
    'text': [
      'I help with customer service for a Bank X рџЏ¦',
      ''
    ],
    'intent': 'InquiryDoing',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044895'
    },
    'action_id': 'Thankful',
    'script': 'chat ENG',
    'wait_for_input': false,
    'text': [
      'You are welcome рџ‘Ќ'
    ],
    'intent': 'Thankful',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044898'
    },
    'action_id': 'contact customer support',
    'script': 'main',
    'wait_for_input': true,
    'text': [
      'Do you wish to talk to a human рџ‘Ё customer support representative?'
    ],
    'intent': 'contact customer support',
    'button': [],
    'quick': [
      'Yes',
      'No'
    ],
    'intro': false,
    'outro': false,
    'router': {
      '\\u002e*1|\\u002e*y': 'main.contact customer support yes',
      '\\u002e*2|\\u002e*n': 'main.contact customer support no'
    }
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b33404489b'
    },
    'action_id': 'nohandover',
    'script': 'main',
    'wait_for_input': false,
    'text': [
      'Alright, just let me know if you want human assistance. :)'
    ],
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b33404489e'
    },
    'action_id': 'when do payments arrive',
    'script': 'main',
    'wait_for_input': true,
    'text': [
      'Good question рџ‘Ќ To get you the exact time when your money arrives select the following:\n1. Money was sent from Poland to Poland\n2. Money was sent from Poland to EU\n3. Money was sent from EU to Poland.\n4. Other transfers.'
    ],
    'intent': 'when do payments arrive',
    'button': [],
    'quick': [
      '1',
      '2',
      '3',
      '4'
    ],
    'intro': false,
    'outro': false,
    'router': {
      '\\u002e*4': 'main.other transfers',
      '\\u002e*1': 'main.poland to poland payment',
      '\\u002e*2': 'main.poland to EU payment',
      '\\u002e*3': 'main.EU to poland payment'
    }
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b3340448a2'
    },
    'action_id': 'car wash',
    'script': 'ck',
    'wait_for_input': true,
    'text': [
      'We can get your car clean рџљ™ There are many options available рџ¤—'
    ],
    'intent': 'car wash',
    'delay': '0',
    'button': [
      {
        'title': 'See options рџљї',
        'url': 'https://www.circlek.se/sv_SE/pg1334072572556/privat/Vara-stationer/biltvatt.html'
      }
    ],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b3340448a5'
    },
    'action_id': 'WhatHobbies gif',
    'script': 'chat ENG',
    'wait_for_input': true,
    'text': [
      ''
    ],
    'intent': 'WhatHobbies gif',
    'image': 'https://media.giphy.com/media/aE3Q6zYxOjB6g/giphy.gif',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b3340448a9'
    },
    'action_id': 'contact customer support no',
    'script': 'main',
    'wait_for_input': true,
    'text': [
      'No problem. You can also call us at +12 345 6789 вЋпёЏ  or email support@support.com рџ“§'
    ],
    'intent': 'contact customer support no',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b3340448ac'
    },
    'action_id': 'food SWE',
    'script': 'ck',
    'wait_for_input': true,
    'text': [
      'Vi bjuder pГҐ varierande mГҐl/mat. Man kan titta pГҐ menyn hГ¤r.'
    ],
    'intent': 'food SWE',
    'delay': '0',
    'button': [
      {
        'title': 'LГ¤s mer рџЌ”',
        'url': 'https://www.circlek.se/sv_SE/pg1334112822982/privat/Vara-stationer/Mat-och-Dryck/hamburgare.html'
      }
    ],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b3340448ae'
    },
    'action_id': '_reactivation',
    'script': 'main',
    'wait_for_input': false,
    'text': [
      ''
    ],
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false,
    'router': {
      '\\u002e*': 'main.askForFeedback'
    }
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b3340448b0'
    },
    'action_id': 'other',
    'script': 'main',
    'wait_for_input': true,
    'text': [
      'Would you like me to connect you to human agents?'
    ],
    'intent': 'other',
    'button': [],
    'quick': [
      'Yes',
      'No'
    ],
    'intro': false,
    'outro': false,
    'router': {
      'n\\u002e*': 'main.nohandover',
      '\\u002e*': 'system._handover'
    }
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b3340448b2'
    },
    'action_id': 'Age',
    'script': 'chat ENG',
    'wait_for_input': false,
    'text': [
      'I am of reasonable age, not too young but not too old either. "Midlife-bot-crisis" has not hit yet рџ„ рџ„ рџ„'
    ],
    'intent': 'Age',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b3340448b5'
    },
    'action_id': 'HowAreYou gif',
    'script': 'chat ENG',
    'wait_for_input': true,
    'text': [
      ''
    ],
    'intent': 'HowAreYou gif',
    'image': 'https://media.giphy.com/media/f1Z3i47LIAHII/giphy.gif',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b3340448b8'
    },
    'action_id': 'EU to poland payment',
    'script': 'main',
    'wait_for_input': true,
    'text': [
      'The payment takes 24 hours to arrive рџЏЄ'
    ],
    'intent': 'EU to poland payment',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b3340448bc'
    },
    'action_id': 'booking time new time',
    'script': 'chat ENG',
    'wait_for_input': true,
    'text': [
      'What time would you have available?'
    ],
    'intent': 'booking time new time',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b3340448bf'
    },
    'action_id': '_handover',
    'script': 'system',
    'wait_for_input': false,
    'text': [
      'Hi, I\'m Sten, how can I help?'
    ],
    'intent': 'handover',
    'delay': '0',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b3340448c7'
    },
    'action_id': 'rahvaarv',
    'script': 'main',
    'wait_for_input': true,
    'text': [
      'ok, tГ¤psusta valikut'
    ],
    'intent': 'rahvaarv',
    'delay': '0',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false,
    'router': {
      '\\u002e*': 'undefined.valla rahvaarv'
    }
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b3340448c9'
    },
    'action_id': 'gasoline',
    'script': 'ck',
    'wait_for_input': true,
    'text': [
      'Are you interested in bensin or diesel?'
    ],
    'intent': 'gasoline',
    'delay': '0',
    'button': [
      {
        'title': 'Bensin в›ЅпёЏ',
        'payload': 'ck.bensin'
      },
      {
        'title': 'Diesel в›ЅпёЏ',
        'payload': 'ck.diesel'
      }
    ],
    'quick': [],
    'intro': false,
    'outro': false,
    'router': {
      '\\u002e*bensin': 'ck.bensin',
      '\\u002e*diesel': 'ck.diesel'
    }
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b3340448cb'
    },
    'action_id': 'Rahvaarv pilt',
    'script': 'chat ENG',
    'wait_for_input': false,
    'text': [
      ''
    ],
    'intent': 'Rahvaarv pilt',
    'image': 'https://viru.alphablues.com/share/joonis.png',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b3340448ce'
    },
    'action_id': 'Hej SWE',
    'script': 'ck',
    'wait_for_input': true,
    'text': [
      'Hej рџ‘‹'
    ],
    'intent': 'Hej SWE',
    'delay': '0',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b3340448d1'
    },
    'action_id': 'booking time not understood',
    'script': 'chat ENG',
    'wait_for_input': true,
    'text': [
      'Do you have a women\'s haircut at 10am on May 3rd?',
      'Can you provide me a with a time on May 3rd?',
      'I\'m sorry, is there availability on May 3rd?'
    ],
    'intent': 'booking time not understood',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b3340448d6'
    },
    'action_id': '_getStarted',
    'script': 'system',
    'wait_for_input': true,
    'text': [
      'Hey! I\'m a hidden Customer Assistant рџЃI can help you with your questions. Just ask рџ‘Ќ'
    ],
    'delay': '0',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b3340448d9'
    },
    'action_id': 'gasoline SWE',
    'script': 'ck',
    'wait_for_input': true,
    'text': [
      'Det kostar 15.54 kronor per liter.'
    ],
    'intent': 'gasoline SWE',
    'delay': '0',
    'button': [
      {
        'title': 'LГ¤s mer в›ЅпёЏ',
        'url': 'https://www.circlek.se/sv_SE/pg1334072868703/foretag/foretagskund/pris-foretagskund.html'
      }
    ],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b3340448dd'
    },
    'action_id': 'Tack SWE',
    'script': 'ck',
    'wait_for_input': true,
    'text': [
      'рџѓ рџ‘‹ рџљ™'
    ],
    'intent': 'Tack SWE',
    'delay': '0',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b3340448e1'
    },
    'action_id': 'cards HU',
    'script': 'main',
    'wait_for_input': true,
    'text': [
      'Igen, kГјlГ¶nbГ¶zЕ‘ hitelkГЎrtyГЎkat kГ­nГЎlunk рџ’і'
    ],
    'intent': 'cards HU',
    'delay': '0',
    'button': [
      {
        'title': 'BankkГЎrtyГЎk',
        'url': 'https://www.otpbank.hu/portal/hu/Bankkartyak'
      }
    ],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b3340448e5'
    },
    'action_id': 'Love gif',
    'script': 'chat ENG',
    'wait_for_input': false,
    'text': [
      ''
    ],
    'intent': 'Love gif',
    'image': 'https://media.giphy.com/media/l4Ki4biBSwhjyrS48/giphy.gif',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b3340448e7'
    },
    'action_id': 'Technology gif',
    'script': 'chat ENG',
    'wait_for_input': true,
    'text': [
      ''
    ],
    'intent': 'Technology gif',
    'image': 'https://media.giphy.com/media/eRUXd9D9v7oEo/giphy.gif',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b3340448e9'
    },
    'action_id': 'opening times',
    'script': 'main',
    'wait_for_input': true,
    'text': [
      'We are open Monday-Friday 10.00 - 21.00 and Saturday-Sunday 9.00 - 18.00. Click the link below to search for our office locations.'
    ],
    'intent': 'opening times',
    'delay': '0',
    'button': [
      {
        'title': 'Our office locations.',
        'url': 'https://maps.google.com'
      }
    ],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b3340448eb'
    },
    'action_id': 'credit card',
    'script': 'main',
    'wait_for_input': true,
    'text': [
      'Sure thing! We offer a variety of credit cards рџ’і  Our most popular card is the fixed-rate MasterCard Gold. It has an annual interest rate of \u003c29%\u003c and can be used domestically and abroad and for purchasing goods online.'
    ],
    'intent': 'credit card',
    'delay': '0',
    'button': [
      {
        'title': 'New button',
        'payload': ''
      }
    ],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b3340448ee'
    },
    'action_id': 'HowAreYou',
    'script': 'chat ENG',
    'wait_for_input': false,
    'text': [
      'Doing well today. Got up in a good mood вЂпёЏ вЂпёЏ вЂпёЏ, so far the day has been stellar!'
    ],
    'intent': 'HowAreYou',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false,
    'router': {
      '\\u002e*': 'chat ENG.HowAreYou gif'
    }
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b3340448f1'
    },
    'action_id': 'WhatHobbies',
    'script': 'chat ENG',
    'wait_for_input': false,
    'text': [
      'I do Sudoku in my free time. And this рџ‘‡'
    ],
    'intent': 'WhatHobbies',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false,
    'router': {
      '\\u002e*': 'chat ENG.WhatHobbies gif'
    }
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b3340448f5'
    },
    'action_id': 'coffee',
    'script': 'ck',
    'wait_for_input': true,
    'text': [
      'We offer some of the best coffee в•пёЏ Check the link below for our menu рџ‘‡'
    ],
    'intent': 'coffee',
    'delay': '0',
    'button': [
      {
        'title': 'See our menu',
        'url': 'https://www.circlek.se/sv_SE/pg1334072572411/privat/Vara-stationer/Mat-och-Dryck/Kaffe.html'
      }
    ],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b3340448f8'
    },
    'action_id': 'BIC SWIFT',
    'script': 'main',
    'wait_for_input': true,
    'text': [
      'BIC or SWIFT is a number to identify banks globally рџ”ў  рџ”ў  рџ”ў  Our bank has our own BIC number which is YX007.'
    ],
    'intent': 'BIC SWIFT',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b3340448fb'
    },
    'action_id': 'Technology',
    'script': 'chat ENG',
    'wait_for_input': false,
    'text': [
      'There is all kinds of machine learning and AI part of me. I went through a lot of text to learn things, learned it in a few weeks. Got the hang of it, pretty cool language рџЋ'
    ],
    'intent': 'Technology',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false,
    'router': {
      '\\u002e*': 'chat ENG.Technology gif'
    }
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b3340448ff'
    },
    'action_id': 'InquiryHelp',
    'script': 'chat ENG',
    'wait_for_input': false,
    'text': [
      'If you need help just ask. Currently I can help you answer some questions but if you have detailed questions about the bank you can reach my human colleagues at +12 345 6789 вЋпёЏ  or email support@support.com рџ“§'
    ],
    'intent': 'InquiryHelp',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044903'
    },
    'action_id': 'askForFeedback',
    'script': 'main',
    'wait_for_input': true,
    'text': [
      'The ticket has been closed.\nHow satisfied were you with the agent?'
    ],
    'button': [],
    'quick': [
      '1 рџ ',
      '2 рџ•',
      '3 рџђ',
      '4 рџЉ',
      '5 рџѓ'
    ],
    'intro': false,
    'outro': false,
    'router': {
      '[0-9]+': 'system.thanksForFeedback'
    }
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044905'
    },
    'action_id': 'diesel video',
    'script': 'ck',
    'wait_for_input': true,
    'text': [
      ''
    ],
    'intent': 'diesel video',
    'image': 'https://viru.alphablues.com/share/CircleKLogo.png',
    'video': 'https://viru.alphablues.com/share/CircleK2.mp4',
    'delay': '0',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044907'
    },
    'action_id': 'answer',
    'script': 'main',
    'wait_for_input': false,
    'text': [
      'great!'
    ],
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044909'
    },
    'action_id': 'greeting',
    'script': 'main',
    'wait_for_input': false,
    'text': [
      'Hi!',
      'Hello!'
    ],
    'intent': 'greeting',
    'delay': '0',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b33404490c'
    },
    'action_id': 'transfer HU',
    'script': 'main',
    'wait_for_input': true,
    'text': [
      'JГі kГ©rdГ©s рџ‘ЌA pГ©nz 24 Гіra mГєlva Г©rkezik meg рџ•ќ'
    ],
    'intent': 'transfer HU',
    'delay': '0',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b33404490f'
    },
    'action_id': 'booking time',
    'script': 'chat ENG',
    'wait_for_input': true,
    'text': [
      'I am looking for something on may 3'
    ],
    'intent': 'booking time',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false,
    'router': {
      '\\u002e*': 'chat ENG.booking time confirmed'
    }
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044913'
    },
    'action_id': 'Love',
    'script': 'chat ENG',
    'wait_for_input': false,
    'text': [
      'Awww, I\'m flattered вќ¤пёЏ вќ¤пёЏ вќ¤пёЏ'
    ],
    'intent': 'Love',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false,
    'router': {
      '\\u002e*': 'chat ENG.Love gif'
    }
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044916'
    },
    'action_id': 'OutlookNotWorking',
    'script': 'chat ENG',
    'wait_for_input': false,
    'text': [
      'If you are having trouble with Outlook then it could be that the token has expired. \n\nFor getting a new token you need to go to Settings \u003e Security \u003e Renew Token.'
    ],
    'intent': 'OutlookNotWorking',
    'button': [
      {
        'title': 'Click here for more information',
        'url': 'http://www.fujitsu.com/us/services/infrastructure/service-desk/'
      }
    ],
    'quick': [],
    'intro': false,
    'outro': false,
    'router': {
      '\\u002e*': 'chat ENG.Outlook Image'
    }
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044919'
    },
    'action_id': 'Rahvaarv',
    'script': 'chat ENG',
    'wait_for_input': false,
    'text': [
      'Eesti rahvaarv on 1 jaanuar 2018 seisuga 1 319 133 рџЂ'
    ],
    'intent': 'Rahvaarv',
    'button': [
      {
        'title': 'Kliki siia et rohkem infot nГ¤ha',
        'url': 'https://www.stat.ee/stat-rahvaarv-aasta-alguses'
      }
    ],
    'quick': [],
    'intro': false,
    'outro': false,
    'router': {
      '\\u002e*': 'chat ENG.Rahvaarv pilt'
    }
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b33404491d'
    },
    'action_id': 'Outlook Image',
    'script': 'chat ENG',
    'wait_for_input': false,
    'text': [
      ''
    ],
    'intent': 'Outlook Image',
    'image': 'https://viru.alphablues.com/share/outlook.jpg',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044921'
    },
    'action_id': 'thanksForFeedback',
    'script': 'system',
    'wait_for_input': true,
    'text': [
      'Thanks for the feedback! рџЉ'
    ],
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044923'
    },
    'action_id': 'menu',
    'script': 'main',
    'wait_for_input': true,
    'text': [
      'Select some of the commonly asked topics below or ask your question. \u003cp\u003eA. Open an account рџ’¶\u003cbr\u003eB. Video identification рџ“ё \u003cbr\u003eC. When do payments arrive рџ•’\u003cbr\u003eD. What is IBAN рџЏ·пёЏ \u003cbr\u003eE. BIC (SWIFT) рџЏ·пёЏ \u003cbr\u003eF. Opening times рџ“…\u003cbr\u003eG. Contact customer support рџ‘‘'
    ],
    'intent': 'menu',
    'button': [],
    'quick': [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G'
    ],
    'router': {
      'D': 'main.what is IBAN',
      'A': 'main.open an account',
      'B': 'main.video identification',
      'G': 'main.contact customer support',
      'C': 'main.when do payments arrive',
      'F': 'main.opening times',
      'E': 'main.BIC SWIFT'
    }
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044925'
    },
    'action_id': 'bensin',
    'script': 'ck',
    'wait_for_input': true,
    'text': [
      'Our miles \u0026 milesPLUS are of the highest quality в›ЅпёЏ'
    ],
    'intent': 'bensin',
    'delay': '0',
    'button': [
      {
        'title': 'Read more рџ‘Ќ',
        'url': 'https://www.circlek.se/sv_SE/pg1334117224839/privat/drivmedel/bensin.html'
      }
    ],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044928'
    },
    'action_id': 'loan HU',
    'script': 'main',
    'wait_for_input': true,
    'text': [
      'Ha elfogy a pГ©nze, fedezze kiadГЎsait a szГЎmlГЎjГЎn elГ©rhetЕ‘ biztonsГЎgi tartalГ©kbГіl рџ‘Ќ Az ГЎrak alacsonyak.'
    ],
    'intent': 'loan HU',
    'delay': '0',
    'button': [
      {
        'title': 'TГ¶bb informГЎciГі',
        'url': 'https://www.otpbank.hu/portal/hu/SzabadFelhasznalasuHitelek/Folyoszamlahitel'
      }
    ],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b33404492c'
    },
    'action_id': 'form',
    'script': 'ck',
    'wait_for_input': true,
    'text': [
      'ask question'
    ],
    'intent': 'form',
    'delay': '0',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b33404492f'
    },
    'action_id': 'booking time confirmed',
    'script': 'chat ENG',
    'wait_for_input': true,
    'text': [
      'Great, booking confirmed for {{time.date}}'
    ],
    'intent': 'booking time confirmed',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044932'
    },
    'action_id': 'car wash SWE',
    'script': 'ck',
    'wait_for_input': true,
    'text': [
      'Man kan tvГ¤tta bilen i vГҐrt biltvГ¤tt рџљї Det Г¤r mycket bekvГ¤mt.'
    ],
    'intent': 'car wash SWE',
    'delay': '0',
    'button': [
      {
        'title': 'LГ¤s mer om det hГ¤r рџљї',
        'url': 'https://www.circlek.se/sv_SE/pg1334072572556/privat/Vara-stationer/biltvatt.html'
      }
    ],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044937'
    },
    'action_id': 'New node',
    'script': 'main',
    'wait_for_input': true
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b33404493b'
    },
    'action_id': 'authentication HU',
    'script': 'main',
    'wait_for_input': true,
    'text': [
      'Nem problГ©ma. KГ©rjГјk, csak a jelszГі elsЕ‘ 8 karakterГ©t Г­rja be рџ”‘'
    ],
    'intent': 'authentication HU',
    'delay': '0',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b33404493d'
    },
    'action_id': 'coffee SWE',
    'script': 'ck',
    'wait_for_input': true,
    'text': [
      'Kaffets kvalitГ© Г¤r det viktigaste fГ¶r oss в•пёЏ Vi bjuder det bГ¤sta kaffe till vГҐra kunder. LГ¤s mer om det hГ¤r рџ‘‡'
    ],
    'intent': 'coffee SWE',
    'delay': '0',
    'button': [
      {
        'title': 'LГ¤s mer в•пёЏ',
        'url': 'https://www.circlek.se/sv_SE/pg1334072572411/privat/Vara-stationer/Mat-och-Dryck/Kaffe.html'
      }
    ],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b33404493f'
    },
    'action_id': 'Weather',
    'script': 'main',
    'wait_for_input': true,
    'text': [
      'sunny',
      'cloudy'
    ],
    'intent': 'Weather',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044941'
    },
    'action_id': 'diesel',
    'script': 'ck',
    'wait_for_input': false,
    'text': [
      'Miles \u0026 milesPLUS diesel takes you further!'
    ],
    'intent': 'diesel',
    'delay': '0',
    'button': [
      {
        'title': 'Read more рџЋ',
        'url': 'https://www.circlek.se/sv_SE/pg1334117226274/privat/drivmedel/diesel.html'
      }
    ],
    'quick': [],
    'intro': false,
    'outro': false,
    'router': {
      '\\u002e*': 'ck.diesel video'
    }
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044944'
    },
    'action_id': 'carousel',
    'script': 'main',
    'wait_for_input': true,
    'text': [
      ''
    ],
    'intent': 'carousel',
    'delay': '0',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b33404494b'
    },
    'action_id': 'UK stay',
    'script': 'D',
    'wait_for_input': true,
    'text': [
      'You can stay in the UK рџ‡¬рџ‡§for \u003cvariable\u003e \u003ctime unit\u003e have a valid visa and a valid passport. There are different requirements for different nationalities, please check the link below рџ‘‡'
    ],
    'intent': 'UK stay',
    'delay': '0',
    'button': [
      {
        'title': 'Do I need a visa?',
        'url': 'https://www.gov.uk/check-uk-visa'
      }
    ],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b33404494e'
    },
    'action_id': 'Nanny',
    'script': 'D',
    'wait_for_input': true,
    'text': [
      'Nannies need to be registered in the Childcare Register. The details can be found here:'
    ],
    'intent': 'Nanny',
    'delay': '0',
    'button': [
      {
        'title': 'Registration info',
        'url': 'https://www.gov.uk/guidance/childminders-and-childcare-providers-register-with-ofsted/nannies-registration'
      }
    ],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044951'
    },
    'action_id': 'Spouse work',
    'script': 'D',
    'wait_for_input': true,
    'text': [
      'Is your spouse currently working?'
    ],
    'intent': 'Spouse work',
    'delay': '0',
    'button': [
      {
        'title': '1. Yes вњ…',
        'payload': 'D.Yes work'
      },
      {
        'title': '2. No вќЊ',
        'payload': 'D.No work'
      }
    ],
    'quick': [],
    'intro': false,
    'outro': false,
    'router': {
      '\\u002e*1': 'D.Yes work',
      '\\u002e*2': 'D.No work'
    }
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044955'
    },
    'action_id': 'Yes work',
    'script': 'D',
    'wait_for_input': true,
    'text': [
      'Great. Then your spouce can apply for a working permit.'
    ],
    'intent': 'Yes work',
    'delay': '0',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044959'
    },
    'action_id': 'No work',
    'script': 'D',
    'wait_for_input': true,
    'text': [
      'If your spouse is not working at the moment then only a UK based employer who can provide a visa.'
    ],
    'intent': 'No work',
    'delay': '0',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b33404495b'
    },
    'action_id': 'Lahtiolekuaeg',
    'script': 'RR',
    'wait_for_input': true,
    'text': [
      'Raamatukogu рџ“љ lahtioleku ajad on jГ¤rgmised В рџ•“\n\u003cbr\u003e\nSeptember - juuni:\nE-R 10-20\nL 12-19\nP suletud\n\u003cbr\u003e\nJuulis ja augustis:\nE-R 12-18\nL-P suletud'
    ],
    'intent': 'Lahtiolekuaeg',
    'delay': '0',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b33404495e'
    },
    'action_id': 'Kasutajaks registreerimine',
    'script': 'RR',
    'wait_for_input': true,
    'text': [
      'Raamatukogu kasutajaks registreerumine on tasuta ja kГµik on oodatud рџѓ\n\nRegistreeritud kasutaja Гµigusi tГµendavaks dokumendiks on raamatukogukaart vГµi ID-kaart рџ’і\n\nKasutajaks registreerumine on vГµimalik raamatukogus kohapeal vГµi elektrooniliselt (kliki linki all) рџ‘‡'
    ],
    'intent': 'Kasutajaks registreerimine',
    'delay': '0',
    'button': [
      {
        'title': 'Kasutajaks registreerimine рџ‘©вЂЌрџ’»',
        'url': 'https://sso.nlib.ee/register'
      }
    ],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044961'
    },
    'action_id': 'Stomach_start',
    'script': 'H',
    'wait_for_input': true,
    'text': [
      'Sorry to hear that! Let\'s try to figure out what is the matter and how to get you better рџ‘Ќ\n\n\u003cbr\u003e\n\nWhere exactly is the pain?'
    ],
    'intent': 'Stomach_start',
    'delay': '0',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false,
    'router': {
      '\\u002e*': 'H.how_bad_pain'
    }
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044964'
    },
    'action_id': 'how_bad_pain',
    'script': 'H',
    'wait_for_input': true,
    'text': [
      'And how bad is the pain?'
    ],
    'intent': 'how_bad_pain',
    'delay': '0',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false,
    'router': {
      '\\u002e*': 'H.how_frequent'
    }
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044968'
    },
    'action_id': 'how_frequent',
    'script': 'H',
    'wait_for_input': true,
    'text': [
      'Does the pain come and go?'
    ],
    'intent': 'how_frequent',
    'delay': '0',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false,
    'router': {
      '\\u002e*': 'H.describe_the_pain'
    }
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b33404496c'
    },
    'action_id': 'describe_the_pain',
    'script': 'H',
    'wait_for_input': true,
    'text': [
      'I see рџ¤”How would you describe the pain?'
    ],
    'intent': 'describe_the_pain',
    'delay': '0',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false,
    'router': {
      '\\u002e*': 'H.vomit'
    }
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b33404496f'
    },
    'action_id': 'vomit',
    'script': 'H',
    'wait_for_input': true,
    'text': [
      'Have you vomited at all?'
    ],
    'intent': 'vomit',
    'delay': '0',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false,
    'router': {
      '\\u002e*': 'H.how_long'
    }
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044972'
    },
    'action_id': 'how_long',
    'script': 'H',
    'wait_for_input': true,
    'text': [
      'How long have you had this pain?'
    ],
    'intent': 'how_long',
    'delay': '0',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false,
    'router': {
      '\\u002e*': 'H.personal_check'
    }
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044975'
    },
    'action_id': 'personal_check',
    'script': 'H',
    'wait_for_input': true,
    'text': [
      'I notice the Doctor Smith prescribed you Imodium. Did you take that?'
    ],
    'intent': 'personal_check',
    'delay': '0',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false,
    'router': {
      '\\u002e*': 'H.summary_next_steps'
    }
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044977'
    },
    'action_id': 'summary_next_steps',
    'script': 'H',
    'wait_for_input': true,
    'text': [
      'Great. I have noted that you have stomach pain in the upper area. It is mild and happens 2-3 times a day. There is no vomiting and it has been going on for 2 weeks. You took the last medicine that was prescribed.\n\n\u003cbr\u003e\n\nI will forward this information to Doctor Smith and he will follow up within 24 hours. Feel well until then!'
    ],
    'intent': 'summary_next_steps',
    'delay': '0',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b33404497a'
    },
    'action_id': 'General_complaint',
    'script': 'H',
    'wait_for_input': true,
    'text': [
      'Sorry to hear! Please select the following areas where you have pain:'
    ],
    'intent': 'General_complaint',
    'image': 'https://www.thehealthsciencejournal.com/wp-content/uploads/2018/06/list-muscles-detail.jpg',
    'delay': '0',
    'button': [
      {
        'title': 'Legs',
        'payload': 'H.Legs'
      },
      {
        'title': 'Chest',
        'payload': 'H.Chest'
      },
      {
        'title': 'Arms',
        'payload': 'H.Arms'
      }
    ],
    'quick': [],
    'intro': false,
    'outro': false,
    'router': {
      '\\u002e*': 'H.Arms'
    }
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b33404497d'
    },
    'action_id': 'Legs',
    'script': 'H',
    'wait_for_input': true,
    'text': [
      'Where exactly is the pain?'
    ],
    'intent': 'Legs',
    'delay': '0',
    'button': [
      {
        'title': 'Achilles',
        'payload': 'H.Achilles'
      },
      {
        'title': 'Toe',
        'payload': 'H.Toe'
      }
    ],
    'quick': [],
    'intro': false,
    'outro': false,
    'router': {
      '\\u002e*': 'H.Toe'
    }
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b33404497f'
    },
    'action_id': 'Chest',
    'script': 'H',
    'wait_for_input': true,
    'text': [
      'if you encounter chest pain, take a look at the video below. For further question, let me know!'
    ],
    'intent': 'Chest',
    'delay': '0',
    'button': [
      {
        'title': 'Reasons for chest pain рџ’Љ',
        'url': 'https://www.youtube.com/watch?v=52QeWz3S0Xg'
      }
    ],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044981'
    },
    'action_id': 'Arms',
    'script': 'H',
    'wait_for_input': true,
    'text': [
      'You have been hitting the gym too much рџ‰'
    ],
    'intent': 'Arms',
    'image': 'https://media.giphy.com/media/27IUDmKCXgLZoUNaXQ/giphy.gif',
    'delay': '0',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044985'
    },
    'action_id': 'Achilles',
    'script': 'H',
    'wait_for_input': true,
    'text': [
      'This can be from over training and too little stretching. Please book a time for specialist doctor visit.'
    ],
    'intent': 'Achilles',
    'delay': '0',
    'button': [
      {
        'title': 'Book time',
        'url': 'https://www.viveohealth.com/en/'
      }
    ],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044988'
    },
    'action_id': 'Toe',
    'script': 'H',
    'wait_for_input': true,
    'text': [
      'It looks like you have played golf too much рџ‰Try to take a break and do ice baths each day for 15 minutes вќ„пёЏ'
    ],
    'intent': 'Toe',
    'delay': '0',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b33404498c'
    },
    'action_id': 'Kops',
    'script': 'H',
    'wait_for_input': true,
    'text': [
      'Mis toimub'
    ],
    'intent': 'Kops',
    'delay': '0',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false,
    'router': {
      '\\u002e*': 'undefined.Kops 2'
    }
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044990'
    },
    'action_id': 'arabic weather',
    'script': 'arabic',
    'wait_for_input': true,
    'text': [
      'The weather is nice. Ш§Щ„Ш·Щ‚Ші Ш¬Щ…ЩЉЩ„'
    ],
    'intent': 'arabic weather',
    'delay': '0',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  },
  {
    '_id': {
      '$oid': '5d5517e6b9e9b2b334044995'
    },
    'action_id': 'arabic open account',
    'script': 'arabic',
    'wait_for_input': true,
    'text': [
      'You can open an account. ЩЉЩ…ЩѓЩ†Щѓ ЩЃШЄШ­ Ш­ШіШ§ШЁ.'
    ],
    'intent': 'arabic open account',
    'delay': '0',
    'button': [],
    'quick': [],
    'intro': false,
    'outro': false
  }]