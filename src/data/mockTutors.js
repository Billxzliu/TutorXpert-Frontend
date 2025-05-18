const mockTutors = [
  {
    "id": 1,
    "name": "Victor Roberts",
    "title": "Expert in JavaScript",
    "address": "Chatswood, NSW, Australia",
    "subjects": [
      "JavaScript",
      "React",
      "Python",
      "Calculus"
    ],
    "rating": 4.1,
    "hourlyRate": 95,
    "experience": "5 years experience",
    "bio": "Victor Roberts is a skilled tutor with expertise in JavaScript, React, Python, Calculus.",
    "lat": -33.795901724214716,
    "lng": 151.18381976966558,
    "availableTime": [
      {
        "day": "Monday",
        "start": "10:00",
        "end": "12:00"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "16:00"
      },
      {
        "day": "Friday",
        "start": "09:00",
        "end": "11:00"
      }
    ],
    "education": "Bachelor's Degree in Education"
  },
  {
    "id": 2,
    "name": "Zara Davis",
    "title": "Scientist in Algebra",
    "address": "Rhodes, NSW, Australia",
    "subjects": [
      "Algebra",
      "Math"
    ],
    "rating": 4.1,
    "hourlyRate": 110,
    "experience": "9 years experience",
    "bio": "Zara Davis is a skilled tutor with expertise in Algebra, Math.",
    "lat": -33.8309564517212,
    "lng": 151.0889538916561,
    "availableTime": [
      {
        "day": "Monday",
        "start": "15:00",
        "end": "17:00"
      },
      {
        "day": "Wednesday",
        "start": "09:00",
        "end": "11:00"
      },
      {
        "day": "Sunday",
        "start": "14:00",
        "end": "16:00"
      }
    ],
    "education": "Bachelor's Degree in Biology"
  },
  {
    "id": 3,
    "name": "John Brown",
    "title": "Engineer in Math",
    "address": "UNSW, Kensington, NSW, Australia",
    "subjects": [
      "Math",
      "Calculus",
      "Algebra"
    ],
    "rating": 4.8,
    "hourlyRate": 70,
    "experience": "11 years experience",
    "bio": "John Brown is a skilled tutor with expertise in Math, Calculus, Algebra.",
    "lat": -33.916058464217905,
    "lng": 151.23278845970705,
    "availableTime": [
      {
        "day": "Monday",
        "start": "15:00",
        "end": "17:00"
      },
      {
        "day": "Wednesday",
        "start": "09:00",
        "end": "11:00"
      },
      {
        "day": "Sunday",
        "start": "14:00",
        "end": "16:00"
      }
    ],
    "education": "Master's Degree in Data Science"
  },
  {
    "id": 4,
    "name": "Chloe Martin",
    "title": "Coach in Machine Learning",
    "address": "Parramatta, NSW, Australia",
    "subjects": [
      "Machine Learning",
      "Math",
      "Python",
      "English"
    ],
    "rating": 4.6,
    "hourlyRate": 110,
    "experience": "12 years experience",
    "bio": "Chloe Martin is a skilled tutor with expertise in Machine Learning, Math, Python, English.",
    "lat": -33.8166347620252,
    "lng": 151.00334839052985,
    "availableTime": [
      {
        "day": "Tuesday",
        "start": "13:00",
        "end": "15:00"
      },
      {
        "day": "Thursday",
        "start": "09:00",
        "end": "11:00"
      },
      {
        "day": "Saturday",
        "start": "10:00",
        "end": "12:00"
      }
    ],
    "education": "PhD in Mathematics"
  },
  {
    "id": 5,
    "name": "Grace Wang",
    "title": "Expert in Calculus",
    "address": "Chatswood, NSW, Australia",
    "subjects": [
      "Calculus",
      "Python",
      "History"
    ],
    "rating": 4.4,
    "hourlyRate": 75,
    "experience": "4 years experience",
    "bio": "Grace Wang is a skilled tutor with expertise in Calculus, Python, History.",
    "lat": -33.79727072705366,
    "lng": 151.1818005413587,
    "availableTime": [
      {
        "day": "Tuesday",
        "start": "13:00",
        "end": "15:00"
      },
      {
        "day": "Thursday",
        "start": "09:00",
        "end": "11:00"
      },
      {
        "day": "Saturday",
        "start": "10:00",
        "end": "12:00"
      }
    ],
    "education": "Bachelor's Degree in Education"
  },
  {
    "id": 6,
    "name": "Grace Johnson",
    "title": "Engineer in Biology",
    "address": "Rhodes, NSW, Australia",
    "subjects": [
      "Biology",
      "Algebra"
    ],
    "rating": 3.9,
    "hourlyRate": 85,
    "experience": "8 years experience",
    "bio": "Grace Johnson is a skilled tutor with expertise in Biology, Algebra.",
    "lat": -33.83200141254797,
    "lng": 151.09014623273453,
    "availableTime": [
      {
        "day": "Monday",
        "start": "15:00",
        "end": "17:00"
      },
      {
        "day": "Wednesday",
        "start": "09:00",
        "end": "11:00"
      },
      {
        "day": "Sunday",
        "start": "14:00",
        "end": "16:00"
      }
    ],
    "education": "Bachelor's Degree in Biology"
  },
  {
    "id": 7,
    "name": "Sarah Zhang",
    "title": "Coach in React",
    "address": "Chatswood, NSW, Australia",
    "subjects": [
      "React",
      "English",
      "Calculus",
      "Physics"
    ],
    "rating": 4.7,
    "hourlyRate": 105,
    "experience": "3 years experience",
    "bio": "Sarah Zhang is a skilled tutor with expertise in React, English, Calculus, Physics.",
    "lat": -33.7943140112925,
    "lng": 151.1812802574805,
    "availableTime": [
      {
        "day": "Monday",
        "start": "10:00",
        "end": "12:00"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "16:00"
      },
      {
        "day": "Friday",
        "start": "09:00",
        "end": "11:00"
      }
    ],
    "education": "PhD in Machine Learning"
  },
  {
    "id": 8,
    "name": "John Al-Amin",
    "title": "Coach in History",
    "address": "Strathfield, NSW, Australia",
    "subjects": [
      "History",
      "Geography",
      "Chemistry",
      "React"
    ],
    "rating": 4.0,
    "hourlyRate": 100,
    "experience": "3 years experience",
    "bio": "John Al-Amin is a skilled tutor with expertise in History, Geography, Chemistry, React.",
    "lat": -33.87375440918658,
    "lng": 151.09585553400242,
    "availableTime": [
      {
        "day": "Tuesday",
        "start": "13:00",
        "end": "15:00"
      },
      {
        "day": "Thursday",
        "start": "09:00",
        "end": "11:00"
      },
      {
        "day": "Saturday",
        "start": "10:00",
        "end": "12:00"
      }
    ],
    "education": "PhD in Machine Learning"
  },
  {
    "id": 9,
    "name": "Kevin Martin",
    "title": "Scientist in Biology",
    "address": "Sydney University, NSW, Australia",
    "subjects": [
      "Biology",
      "Chemistry",
      "Algebra",
      "Machine Learning"
    ],
    "rating": 4.8,
    "hourlyRate": 80,
    "experience": "11 years experience",
    "bio": "Kevin Martin is a skilled tutor with expertise in Biology, Chemistry, Algebra, Machine Learning.",
    "lat": -33.888553268936505,
    "lng": 151.1855057492729,
    "availableTime": [
      {
        "day": "Monday",
        "start": "15:00",
        "end": "17:00"
      },
      {
        "day": "Wednesday",
        "start": "09:00",
        "end": "11:00"
      },
      {
        "day": "Sunday",
        "start": "14:00",
        "end": "16:00"
      }
    ],
    "education": "Master's Degree in Computer Science"
  },
  {
    "id": 10,
    "name": "Daniel Nguyen",
    "title": "Expert in Physics",
    "address": "Hurstville, NSW, Australia",
    "subjects": [
      "Physics",
      "Data Science",
      "Machine Learning",
      "Python"
    ],
    "rating": 4.9,
    "hourlyRate": 85,
    "experience": "3 years experience",
    "bio": "Daniel Nguyen is a skilled tutor with expertise in Physics, Data Science, Machine Learning, Python.",
    "lat": -33.97068231921423,
    "lng": 151.0988223770006,
    "availableTime": [
      {
        "day": "Tuesday",
        "start": "13:00",
        "end": "15:00"
      },
      {
        "day": "Thursday",
        "start": "09:00",
        "end": "11:00"
      },
      {
        "day": "Saturday",
        "start": "10:00",
        "end": "12:00"
      }
    ],
    "education": "Master's Degree in Data Science"
  },
  {
    "id": 11,
    "name": "Victor Davis",
    "title": "Engineer in Calculus",
    "address": "Newtown, NSW, Australia",
    "subjects": [
      "Calculus",
      "Python",
      "English"
    ],
    "rating": 4.8,
    "hourlyRate": 110,
    "experience": "5 years experience",
    "bio": "Victor Davis is a skilled tutor with expertise in Calculus, Python, English.",
    "lat": -33.89857866749411,
    "lng": 151.17551078593635,
    "availableTime": [
      {
        "day": "Monday",
        "start": "10:00",
        "end": "12:00"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "16:00"
      },
      {
        "day": "Friday",
        "start": "09:00",
        "end": "11:00"
      }
    ],
    "education": "PhD in Mathematics"
  },
  {
    "id": 12,
    "name": "Mohammed Wang",
    "title": "Scientist in Python",
    "address": "Hurstville, NSW, Australia",
    "subjects": [
      "Python",
      "History"
    ],
    "rating": 4.3,
    "hourlyRate": 75,
    "experience": "7 years experience",
    "bio": "Mohammed Wang is a skilled tutor with expertise in Python, History.",
    "lat": -33.96896549524058,
    "lng": 151.0986143760741,
    "availableTime": [
      {
        "day": "Monday",
        "start": "10:00",
        "end": "12:00"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "16:00"
      },
      {
        "day": "Friday",
        "start": "09:00",
        "end": "11:00"
      }
    ],
    "education": "PhD in Machine Learning"
  },
  {
    "id": 13,
    "name": "John Taylor",
    "title": "PhD in Machine Learning",
    "address": "UNSW, Kensington, NSW, Australia",
    "subjects": [
      "Machine Learning",
      "Chemistry"
    ],
    "rating": 3.8,
    "hourlyRate": 115,
    "experience": "11 years experience",
    "bio": "John Taylor is a skilled tutor with expertise in Machine Learning, Chemistry.",
    "lat": -33.91904916150912,
    "lng": 151.23062258375134,
    "availableTime": [
      {
        "day": "Tuesday",
        "start": "13:00",
        "end": "15:00"
      },
      {
        "day": "Thursday",
        "start": "09:00",
        "end": "11:00"
      },
      {
        "day": "Saturday",
        "start": "10:00",
        "end": "12:00"
      }
    ],
    "education": "Master's Degree in Computer Science"
  },
  {
    "id": 14,
    "name": "Victor Zhang",
    "title": "Engineer in History",
    "address": "Hurstville, NSW, Australia",
    "subjects": [
      "History",
      "Python",
      "React",
      "JavaScript"
    ],
    "rating": 4.7,
    "hourlyRate": 100,
    "experience": "15 years experience",
    "bio": "Victor Zhang is a skilled tutor with expertise in History, Python, React, JavaScript.",
    "lat": -33.967929756846644,
    "lng": 151.10114274493748,
    "availableTime": [
      {
        "day": "Tuesday",
        "start": "13:00",
        "end": "15:00"
      },
      {
        "day": "Thursday",
        "start": "09:00",
        "end": "11:00"
      },
      {
        "day": "Saturday",
        "start": "10:00",
        "end": "12:00"
      }
    ],
    "education": "PhD in Machine Learning"
  },
  {
    "id": 15,
    "name": "Alice Zhang",
    "title": "Coach in Data Science",
    "address": "Sydney University, NSW, Australia",
    "subjects": [
      "Data Science",
      "Chemistry"
    ],
    "rating": 3.6,
    "hourlyRate": 70,
    "experience": "7 years experience",
    "bio": "Alice Zhang is a skilled tutor with expertise in Data Science, Chemistry.",
    "lat": -33.888381554926696,
    "lng": 151.18618831276095,
    "availableTime": [
      {
        "day": "Tuesday",
        "start": "13:00",
        "end": "15:00"
      },
      {
        "day": "Thursday",
        "start": "09:00",
        "end": "11:00"
      },
      {
        "day": "Saturday",
        "start": "10:00",
        "end": "12:00"
      }
    ],
    "education": "Bachelor's Degree in Biology"
  },
  {
    "id": 16,
    "name": "Emily Taylor",
    "title": "Scientist in Data Science",
    "address": "Sydney University, NSW, Australia",
    "subjects": [
      "Data Science",
      "Geography"
    ],
    "rating": 4.2,
    "hourlyRate": 50,
    "experience": "10 years experience",
    "bio": "Emily Taylor is a skilled tutor with expertise in Data Science, Geography.",
    "lat": -33.88686779381142,
    "lng": 151.18563525918137,
    "availableTime": [
      {
        "day": "Tuesday",
        "start": "13:00",
        "end": "15:00"
      },
      {
        "day": "Thursday",
        "start": "09:00",
        "end": "11:00"
      },
      {
        "day": "Saturday",
        "start": "10:00",
        "end": "12:00"
      }
    ],
    "education": "Master's Degree in Data Science"
  },
  {
    "id": 17,
    "name": "Tom Martin",
    "title": "Expert in Algebra",
    "address": "Rhodes, NSW, Australia",
    "subjects": [
      "Algebra",
      "Machine Learning"
    ],
    "rating": 4.6,
    "hourlyRate": 100,
    "experience": "12 years experience",
    "bio": "Tom Martin is a skilled tutor with expertise in Algebra, Machine Learning.",
    "lat": -33.829807911349576,
    "lng": 151.08968760483978,
    "availableTime": [
      {
        "day": "Monday",
        "start": "10:00",
        "end": "12:00"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "16:00"
      },
      {
        "day": "Friday",
        "start": "09:00",
        "end": "11:00"
      }
    ],
    "education": "Master's Degree in Computer Science"
  },
  {
    "id": 18,
    "name": "Linda Wang",
    "title": "Coach in History",
    "address": "George St, Sydney, NSW, Australia",
    "subjects": [
      "History",
      "React",
      "Math",
      "Physics"
    ],
    "rating": 3.7,
    "hourlyRate": 70,
    "experience": "11 years experience",
    "bio": "Linda Wang is a skilled tutor with expertise in History, React, Math, Physics.",
    "lat": -33.86785518457669,
    "lng": 151.2075370135251,
    "availableTime": [
      {
        "day": "Monday",
        "start": "10:00",
        "end": "12:00"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "16:00"
      },
      {
        "day": "Friday",
        "start": "09:00",
        "end": "11:00"
      }
    ],
    "education": "Bachelor's Degree in Biology"
  },
  {
    "id": 19,
    "name": "Victor Zhang",
    "title": "Expert in Data Science",
    "address": "UNSW, Kensington, NSW, Australia",
    "subjects": [
      "Data Science",
      "Math",
      "Algebra"
    ],
    "rating": 3.9,
    "hourlyRate": 95,
    "experience": "13 years experience",
    "bio": "Victor Zhang is a skilled tutor with expertise in Data Science, Math, Algebra.",
    "lat": -33.916068385926245,
    "lng": 151.22956016116655,
    "availableTime": [
      {
        "day": "Monday",
        "start": "10:00",
        "end": "12:00"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "16:00"
      },
      {
        "day": "Friday",
        "start": "09:00",
        "end": "11:00"
      }
    ],
    "education": "Bachelor's Degree in Education"
  },
  {
    "id": 20,
    "name": "Linda Clark",
    "title": "Lecturer in History",
    "address": "Chatswood, NSW, Australia",
    "subjects": [
      "History",
      "Biology",
      "English"
    ],
    "rating": 3.5,
    "hourlyRate": 90,
    "experience": "11 years experience",
    "bio": "Linda Clark is a skilled tutor with expertise in History, Biology, English.",
    "lat": -33.79782077481511,
    "lng": 151.18269217872646,
    "availableTime": [
      {
        "day": "Monday",
        "start": "15:00",
        "end": "17:00"
      },
      {
        "day": "Wednesday",
        "start": "09:00",
        "end": "11:00"
      },
      {
        "day": "Sunday",
        "start": "14:00",
        "end": "16:00"
      }
    ],
    "education": "Bachelor's Degree in Education"
  },
  {
    "id": 21,
    "name": "Grace Wilson",
    "title": "Coach in Physics",
    "address": "Newtown, NSW, Australia",
    "subjects": [
      "Physics",
      "React",
      "Math",
      "Calculus"
    ],
    "rating": 4.2,
    "hourlyRate": 90,
    "experience": "7 years experience",
    "bio": "Grace Wilson is a skilled tutor with expertise in Physics, React, Math, Calculus.",
    "lat": -33.89964757362254,
    "lng": 151.17251913935166,
    "availableTime": [
      {
        "day": "Monday",
        "start": "15:00",
        "end": "17:00"
      },
      {
        "day": "Wednesday",
        "start": "09:00",
        "end": "11:00"
      },
      {
        "day": "Sunday",
        "start": "14:00",
        "end": "16:00"
      }
    ],
    "education": "Bachelor's Degree in Physics"
  },
  {
    "id": 22,
    "name": "Kevin Zhang",
    "title": "Scientist in History",
    "address": "Sydney University, NSW, Australia",
    "subjects": [
      "History",
      "Machine Learning"
    ],
    "rating": 3.6,
    "hourlyRate": 60,
    "experience": "15 years experience",
    "bio": "Kevin Zhang is a skilled tutor with expertise in History, Machine Learning.",
    "lat": -33.888586671006856,
    "lng": 151.18860197063646,
    "availableTime": [
      {
        "day": "Monday",
        "start": "15:00",
        "end": "17:00"
      },
      {
        "day": "Wednesday",
        "start": "09:00",
        "end": "11:00"
      },
      {
        "day": "Sunday",
        "start": "14:00",
        "end": "16:00"
      }
    ],
    "education": "Bachelor's Degree in Education"
  },
  {
    "id": 23,
    "name": "John Brown",
    "title": "Coach in Physics",
    "address": "Hurstville, NSW, Australia",
    "subjects": [
      "Physics",
      "JavaScript",
      "Chemistry",
      "Math"
    ],
    "rating": 4.9,
    "hourlyRate": 65,
    "experience": "3 years experience",
    "bio": "John Brown is a skilled tutor with expertise in Physics, JavaScript, Chemistry, Math.",
    "lat": -33.96993143056472,
    "lng": 151.0991883237768,
    "availableTime": [
      {
        "day": "Monday",
        "start": "10:00",
        "end": "12:00"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "16:00"
      },
      {
        "day": "Friday",
        "start": "09:00",
        "end": "11:00"
      }
    ],
    "education": "Bachelor's Degree in Education"
  },
  {
    "id": 24,
    "name": "Kevin Brown",
    "title": "Scientist in Physics",
    "address": "Rhodes, NSW, Australia",
    "subjects": [
      "Physics",
      "Python",
      "Math"
    ],
    "rating": 3.5,
    "hourlyRate": 115,
    "experience": "11 years experience",
    "bio": "Kevin Brown is a skilled tutor with expertise in Physics, Python, Math.",
    "lat": -33.82836684784116,
    "lng": 151.0899535389808,
    "availableTime": [
      {
        "day": "Tuesday",
        "start": "13:00",
        "end": "15:00"
      },
      {
        "day": "Thursday",
        "start": "09:00",
        "end": "11:00"
      },
      {
        "day": "Saturday",
        "start": "10:00",
        "end": "12:00"
      }
    ],
    "education": "Bachelor's Degree in Physics"
  },
  {
    "id": 25,
    "name": "Alice Lee",
    "title": "Expert in Calculus",
    "address": "Newtown, NSW, Australia",
    "subjects": [
      "Calculus",
      "English",
      "Chemistry",
      "JavaScript"
    ],
    "rating": 4.3,
    "hourlyRate": 115,
    "experience": "15 years experience",
    "bio": "Alice Lee is a skilled tutor with expertise in Calculus, English, Chemistry, JavaScript.",
    "lat": -33.89918103255497,
    "lng": 151.1722104299352,
    "availableTime": [
      {
        "day": "Monday",
        "start": "15:00",
        "end": "17:00"
      },
      {
        "day": "Wednesday",
        "start": "09:00",
        "end": "11:00"
      },
      {
        "day": "Sunday",
        "start": "14:00",
        "end": "16:00"
      }
    ],
    "education": "PhD in Machine Learning"
  },
  {
    "id": 26,
    "name": "Linda Davis",
    "title": "Scientist in Algebra",
    "address": "Strathfield, NSW, Australia",
    "subjects": [
      "Algebra",
      "Machine Learning",
      "Biology"
    ],
    "rating": 4.1,
    "hourlyRate": 85,
    "experience": "14 years experience",
    "bio": "Linda Davis is a skilled tutor with expertise in Algebra, Machine Learning, Biology.",
    "lat": -33.87144208810948,
    "lng": 151.0974975120175,
    "availableTime": [
      {
        "day": "Tuesday",
        "start": "13:00",
        "end": "15:00"
      },
      {
        "day": "Thursday",
        "start": "09:00",
        "end": "11:00"
      },
      {
        "day": "Saturday",
        "start": "10:00",
        "end": "12:00"
      }
    ],
    "education": "Master's Degree in Data Science"
  },
  {
    "id": 27,
    "name": "Kevin Wang",
    "title": "Engineer in Data Science",
    "address": "Rhodes, NSW, Australia",
    "subjects": [
      "Data Science",
      "History",
      "Calculus",
      "Algebra"
    ],
    "rating": 4.3,
    "hourlyRate": 100,
    "experience": "4 years experience",
    "bio": "Kevin Wang is a skilled tutor with expertise in Data Science, History, Calculus, Algebra.",
    "lat": -33.828797841199126,
    "lng": 151.0891170778999,
    "availableTime": [
      {
        "day": "Monday",
        "start": "10:00",
        "end": "12:00"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "16:00"
      },
      {
        "day": "Friday",
        "start": "09:00",
        "end": "11:00"
      }
    ],
    "education": "Master's Degree in Data Science"
  },
  {
    "id": 28,
    "name": "Linda Johnson",
    "title": "Expert in Algebra",
    "address": "Sydney University, NSW, Australia",
    "subjects": [
      "Algebra",
      "Chemistry"
    ],
    "rating": 3.9,
    "hourlyRate": 65,
    "experience": "6 years experience",
    "bio": "Linda Johnson is a skilled tutor with expertise in Algebra, Chemistry.",
    "lat": -33.887646361141364,
    "lng": 151.1884028155658,
    "availableTime": [
      {
        "day": "Monday",
        "start": "15:00",
        "end": "17:00"
      },
      {
        "day": "Wednesday",
        "start": "09:00",
        "end": "11:00"
      },
      {
        "day": "Sunday",
        "start": "14:00",
        "end": "16:00"
      }
    ],
    "education": "Bachelor's Degree in Education"
  },
  {
    "id": 29,
    "name": "Daniel Liu",
    "title": "Lecturer in React",
    "address": "Hurstville, NSW, Australia",
    "subjects": [
      "React",
      "Geography",
      "Physics"
    ],
    "rating": 4.3,
    "hourlyRate": 70,
    "experience": "15 years experience",
    "bio": "Daniel Liu is a skilled tutor with expertise in React, Geography, Physics.",
    "lat": -33.97079138346204,
    "lng": 151.10059815010717,
    "availableTime": [
      {
        "day": "Monday",
        "start": "15:00",
        "end": "17:00"
      },
      {
        "day": "Wednesday",
        "start": "09:00",
        "end": "11:00"
      },
      {
        "day": "Sunday",
        "start": "14:00",
        "end": "16:00"
      }
    ],
    "education": "Bachelor's Degree in Education"
  },
  {
    "id": 30,
    "name": "Emily Taylor",
    "title": "Expert in Biology",
    "address": "George St, Sydney, NSW, Australia",
    "subjects": [
      "Biology",
      "Geography"
    ],
    "rating": 4.3,
    "hourlyRate": 90,
    "experience": "11 years experience",
    "bio": "Emily Taylor is a skilled tutor with expertise in Biology, Geography.",
    "lat": -33.86839277812464,
    "lng": 151.2072353877495,
    "availableTime": [
      {
        "day": "Tuesday",
        "start": "13:00",
        "end": "15:00"
      },
      {
        "day": "Thursday",
        "start": "09:00",
        "end": "11:00"
      },
      {
        "day": "Saturday",
        "start": "10:00",
        "end": "12:00"
      }
    ],
    "education": "Master's Degree in Computer Science"
  },
  {
    "id": 31,
    "name": "Alice Brown",
    "title": "PhD in Chemistry",
    "address": "Sydney University, NSW, Australia",
    "subjects": [
      "Chemistry",
      "Python"
    ],
    "rating": 3.7,
    "hourlyRate": 90,
    "experience": "4 years experience",
    "bio": "Alice Brown is a skilled tutor with expertise in Chemistry, Python.",
    "lat": -33.88948469007461,
    "lng": 151.18910025824937,
    "availableTime": [
      {
        "day": "Monday",
        "start": "10:00",
        "end": "12:00"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "16:00"
      },
      {
        "day": "Friday",
        "start": "09:00",
        "end": "11:00"
      }
    ],
    "education": "PhD in Mathematics"
  },
  {
    "id": 32,
    "name": "Alice Zhang",
    "title": "Scientist in JavaScript",
    "address": "Chatswood, NSW, Australia",
    "subjects": [
      "JavaScript",
      "React",
      "Geography"
    ],
    "rating": 3.9,
    "hourlyRate": 75,
    "experience": "4 years experience",
    "bio": "Alice Zhang is a skilled tutor with expertise in JavaScript, React, Geography.",
    "lat": -33.796415126489755,
    "lng": 151.18277074176467,
    "availableTime": [
      {
        "day": "Monday",
        "start": "10:00",
        "end": "12:00"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "16:00"
      },
      {
        "day": "Friday",
        "start": "09:00",
        "end": "11:00"
      }
    ],
    "education": "Master's Degree in Computer Science"
  },
  {
    "id": 33,
    "name": "Chloe Brown",
    "title": "Expert in Biology",
    "address": "Chatswood, NSW, Australia",
    "subjects": [
      "Biology",
      "Python"
    ],
    "rating": 4.7,
    "hourlyRate": 85,
    "experience": "6 years experience",
    "bio": "Chloe Brown is a skilled tutor with expertise in Biology, Python.",
    "lat": -33.79507096683375,
    "lng": 151.18297525044787,
    "availableTime": [
      {
        "day": "Monday",
        "start": "15:00",
        "end": "17:00"
      },
      {
        "day": "Wednesday",
        "start": "09:00",
        "end": "11:00"
      },
      {
        "day": "Sunday",
        "start": "14:00",
        "end": "16:00"
      }
    ],
    "education": "PhD in Mathematics"
  },
  {
    "id": 34,
    "name": "Mohammed Martin",
    "title": "Engineer in Machine Learning",
    "address": "Hurstville, NSW, Australia",
    "subjects": [
      "Machine Learning",
      "Python"
    ],
    "rating": 3.7,
    "hourlyRate": 95,
    "experience": "3 years experience",
    "bio": "Mohammed Martin is a skilled tutor with expertise in Machine Learning, Python.",
    "lat": -33.96972371296468,
    "lng": 151.0992557602417,
    "availableTime": [
      {
        "day": "Monday",
        "start": "15:00",
        "end": "17:00"
      },
      {
        "day": "Wednesday",
        "start": "09:00",
        "end": "11:00"
      },
      {
        "day": "Sunday",
        "start": "14:00",
        "end": "16:00"
      }
    ],
    "education": "PhD in Machine Learning"
  },
  {
    "id": 35,
    "name": "Sarah Smith",
    "title": "Scientist in English",
    "address": "Strathfield, NSW, Australia",
    "subjects": [
      "English",
      "Math",
      "Python",
      "Calculus"
    ],
    "rating": 4.7,
    "hourlyRate": 55,
    "experience": "15 years experience",
    "bio": "Sarah Smith is a skilled tutor with expertise in English, Math, Python, Calculus.",
    "lat": -33.87486822827669,
    "lng": 151.09574943504848,
    "availableTime": [
      {
        "day": "Monday",
        "start": "10:00",
        "end": "12:00"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "16:00"
      },
      {
        "day": "Friday",
        "start": "09:00",
        "end": "11:00"
      }
    ],
    "education": "Bachelor's Degree in Education"
  },
  {
    "id": 36,
    "name": "Linda Lee",
    "title": "Lecturer in Python",
    "address": "Surry Hills, NSW, Australia",
    "subjects": [
      "Python",
      "Chemistry",
      "JavaScript",
      "History"
    ],
    "rating": 4.6,
    "hourlyRate": 100,
    "experience": "3 years experience",
    "bio": "Linda Lee is a skilled tutor with expertise in Python, Chemistry, JavaScript, History.",
    "lat": -33.884291468756295,
    "lng": 151.21081720291363,
    "availableTime": [
      {
        "day": "Monday",
        "start": "15:00",
        "end": "17:00"
      },
      {
        "day": "Wednesday",
        "start": "09:00",
        "end": "11:00"
      },
      {
        "day": "Sunday",
        "start": "14:00",
        "end": "16:00"
      }
    ],
    "education": "Master's Degree in Data Science"
  },
  {
    "id": 37,
    "name": "Kevin Wang",
    "title": "Engineer in Geography",
    "address": "Strathfield, NSW, Australia",
    "subjects": [
      "Geography",
      "JavaScript",
      "React"
    ],
    "rating": 3.8,
    "hourlyRate": 115,
    "experience": "10 years experience",
    "bio": "Kevin Wang is a skilled tutor with expertise in Geography, JavaScript, React.",
    "lat": -33.873553577222836,
    "lng": 151.09412541030107,
    "availableTime": [
      {
        "day": "Monday",
        "start": "15:00",
        "end": "17:00"
      },
      {
        "day": "Wednesday",
        "start": "09:00",
        "end": "11:00"
      },
      {
        "day": "Sunday",
        "start": "14:00",
        "end": "16:00"
      }
    ],
    "education": "Bachelor's Degree in Education"
  },
  {
    "id": 38,
    "name": "Victor Roberts",
    "title": "Expert in Chemistry",
    "address": "Parramatta, NSW, Australia",
    "subjects": [
      "Chemistry",
      "React",
      "Biology"
    ],
    "rating": 3.7,
    "hourlyRate": 85,
    "experience": "6 years experience",
    "bio": "Victor Roberts is a skilled tutor with expertise in Chemistry, React, Biology.",
    "lat": -33.817903886961936,
    "lng": 151.00258380027734,
    "availableTime": [
      {
        "day": "Monday",
        "start": "10:00",
        "end": "12:00"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "16:00"
      },
      {
        "day": "Friday",
        "start": "09:00",
        "end": "11:00"
      }
    ],
    "education": "Master's Degree in Computer Science"
  },
  {
    "id": 39,
    "name": "Sophie Smith",
    "title": "Scientist in Data Science",
    "address": "Chatswood, NSW, Australia",
    "subjects": [
      "Data Science",
      "Physics",
      "JavaScript",
      "Calculus"
    ],
    "rating": 4.0,
    "hourlyRate": 85,
    "experience": "7 years experience",
    "bio": "Sophie Smith is a skilled tutor with expertise in Data Science, Physics, JavaScript, Calculus.",
    "lat": -33.79595738551014,
    "lng": 151.18190227974952,
    "availableTime": [
      {
        "day": "Tuesday",
        "start": "13:00",
        "end": "15:00"
      },
      {
        "day": "Thursday",
        "start": "09:00",
        "end": "11:00"
      },
      {
        "day": "Saturday",
        "start": "10:00",
        "end": "12:00"
      }
    ],
    "education": "PhD in Machine Learning"
  },
  {
    "id": 40,
    "name": "John Brown",
    "title": "Scientist in Math",
    "address": "Parramatta, NSW, Australia",
    "subjects": [
      "Math",
      "Algebra",
      "Physics",
      "English"
    ],
    "rating": 4.9,
    "hourlyRate": 95,
    "experience": "3 years experience",
    "bio": "John Brown is a skilled tutor with expertise in Math, Algebra, Physics, English.",
    "lat": -33.81633198576308,
    "lng": 151.00128131744955,
    "availableTime": [
      {
        "day": "Monday",
        "start": "15:00",
        "end": "17:00"
      },
      {
        "day": "Wednesday",
        "start": "09:00",
        "end": "11:00"
      },
      {
        "day": "Sunday",
        "start": "14:00",
        "end": "16:00"
      }
    ],
    "education": "PhD in Mathematics"
  },
  {
    "id": 41,
    "name": "David Liu",
    "title": "Scientist in Math",
    "address": "Surry Hills, NSW, Australia",
    "subjects": [
      "Math",
      "Machine Learning",
      "Physics"
    ],
    "rating": 4.8,
    "hourlyRate": 60,
    "experience": "4 years experience",
    "bio": "David Liu is a skilled tutor with expertise in Math, Machine Learning, Physics.",
    "lat": -33.88266493256863,
    "lng": 151.21181287636676,
    "availableTime": [
      {
        "day": "Tuesday",
        "start": "13:00",
        "end": "15:00"
      },
      {
        "day": "Thursday",
        "start": "09:00",
        "end": "11:00"
      },
      {
        "day": "Saturday",
        "start": "10:00",
        "end": "12:00"
      }
    ],
    "education": "Master's Degree in Computer Science"
  },
  {
    "id": 42,
    "name": "Tom Wang",
    "title": "Scientist in Algebra",
    "address": "Newtown, NSW, Australia",
    "subjects": [
      "Algebra",
      "Physics",
      "Python"
    ],
    "rating": 4.7,
    "hourlyRate": 50,
    "experience": "13 years experience",
    "bio": "Tom Wang is a skilled tutor with expertise in Algebra, Physics, Python.",
    "lat": -33.89741832739461,
    "lng": 151.1732780663086,
    "availableTime": [
      {
        "day": "Tuesday",
        "start": "13:00",
        "end": "15:00"
      },
      {
        "day": "Thursday",
        "start": "09:00",
        "end": "11:00"
      },
      {
        "day": "Saturday",
        "start": "10:00",
        "end": "12:00"
      }
    ],
    "education": "Bachelor's Degree in Biology"
  },
  {
    "id": 43,
    "name": "David Nguyen",
    "title": "Coach in Chemistry",
    "address": "Hurstville, NSW, Australia",
    "subjects": [
      "Chemistry",
      "History"
    ],
    "rating": 4.2,
    "hourlyRate": 55,
    "experience": "15 years experience",
    "bio": "David Nguyen is a skilled tutor with expertise in Chemistry, History.",
    "lat": -33.96944180109241,
    "lng": 151.09860958555976,
    "availableTime": [
      {
        "day": "Monday",
        "start": "10:00",
        "end": "12:00"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "16:00"
      },
      {
        "day": "Friday",
        "start": "09:00",
        "end": "11:00"
      }
    ],
    "education": "Master's Degree in Data Science"
  },
  {
    "id": 44,
    "name": "John Davis",
    "title": "Coach in Python",
    "address": "Rhodes, NSW, Australia",
    "subjects": [
      "Python",
      "Calculus"
    ],
    "rating": 4.5,
    "hourlyRate": 105,
    "experience": "6 years experience",
    "bio": "John Davis is a skilled tutor with expertise in Python, Calculus.",
    "lat": -33.83097728645181,
    "lng": 151.087559891957,
    "availableTime": [
      {
        "day": "Monday",
        "start": "10:00",
        "end": "12:00"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "16:00"
      },
      {
        "day": "Friday",
        "start": "09:00",
        "end": "11:00"
      }
    ],
    "education": "Bachelor's Degree in Physics"
  },
  {
    "id": 45,
    "name": "Chloe Lee",
    "title": "Engineer in Math",
    "address": "Rhodes, NSW, Australia",
    "subjects": [
      "Math",
      "Calculus",
      "Python"
    ],
    "rating": 4.4,
    "hourlyRate": 70,
    "experience": "4 years experience",
    "bio": "Chloe Lee is a skilled tutor with expertise in Math, Calculus, Python.",
    "lat": -33.828771649232586,
    "lng": 151.08999604923594,
    "availableTime": [
      {
        "day": "Monday",
        "start": "15:00",
        "end": "17:00"
      },
      {
        "day": "Wednesday",
        "start": "09:00",
        "end": "11:00"
      },
      {
        "day": "Sunday",
        "start": "14:00",
        "end": "16:00"
      }
    ],
    "education": "Bachelor's Degree in Biology"
  },
  {
    "id": 46,
    "name": "Victor Roberts",
    "title": "Expert in React",
    "address": "Sydney University, NSW, Australia",
    "subjects": [
      "React",
      "Python",
      "JavaScript"
    ],
    "rating": 3.6,
    "hourlyRate": 60,
    "experience": "7 years experience",
    "bio": "Victor Roberts is a skilled tutor with expertise in React, Python, JavaScript.",
    "lat": -33.890357610172565,
    "lng": 151.18817889079673,
    "availableTime": [
      {
        "day": "Monday",
        "start": "15:00",
        "end": "17:00"
      },
      {
        "day": "Wednesday",
        "start": "09:00",
        "end": "11:00"
      },
      {
        "day": "Sunday",
        "start": "14:00",
        "end": "16:00"
      }
    ],
    "education": "PhD in Machine Learning"
  },
  {
    "id": 47,
    "name": "John Roberts",
    "title": "Scientist in Physics",
    "address": "UNSW, Kensington, NSW, Australia",
    "subjects": [
      "Physics",
      "Python",
      "Math",
      "English"
    ],
    "rating": 4.6,
    "hourlyRate": 65,
    "experience": "10 years experience",
    "bio": "John Roberts is a skilled tutor with expertise in Physics, Python, Math, English.",
    "lat": -33.917926575947796,
    "lng": 151.229920978847,
    "availableTime": [
      {
        "day": "Tuesday",
        "start": "13:00",
        "end": "15:00"
      },
      {
        "day": "Thursday",
        "start": "09:00",
        "end": "11:00"
      },
      {
        "day": "Saturday",
        "start": "10:00",
        "end": "12:00"
      }
    ],
    "education": "Master's Degree in Computer Science"
  },
  {
    "id": 48,
    "name": "Grace Roberts",
    "title": "Expert in Math",
    "address": "George St, Sydney, NSW, Australia",
    "subjects": [
      "Math",
      "Machine Learning",
      "Physics"
    ],
    "rating": 3.7,
    "hourlyRate": 55,
    "experience": "7 years experience",
    "bio": "Grace Roberts is a skilled tutor with expertise in Math, Machine Learning, Physics.",
    "lat": -33.86653034381268,
    "lng": 151.20613717741654,
    "availableTime": [
      {
        "day": "Monday",
        "start": "15:00",
        "end": "17:00"
      },
      {
        "day": "Wednesday",
        "start": "09:00",
        "end": "11:00"
      },
      {
        "day": "Sunday",
        "start": "14:00",
        "end": "16:00"
      }
    ],
    "education": "Bachelor's Degree in Biology"
  },
  {
    "id": 49,
    "name": "Emily Nguyen",
    "title": "Expert in Physics",
    "address": "Rhodes, NSW, Australia",
    "subjects": [
      "Physics",
      "Calculus",
      "English",
      "Algebra"
    ],
    "rating": 4.3,
    "hourlyRate": 75,
    "experience": "7 years experience",
    "bio": "Emily Nguyen is a skilled tutor with expertise in Physics, Calculus, English, Algebra.",
    "lat": -33.83038485547788,
    "lng": 151.088690577635,
    "availableTime": [
      {
        "day": "Monday",
        "start": "10:00",
        "end": "12:00"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "16:00"
      },
      {
        "day": "Friday",
        "start": "09:00",
        "end": "11:00"
      }
    ],
    "education": "Master's Degree in Data Science"
  },
  {
    "id": 50,
    "name": "Victor Clark",
    "title": "Expert in Data Science",
    "address": "Rhodes, NSW, Australia",
    "subjects": [
      "Data Science",
      "Machine Learning",
      "JavaScript"
    ],
    "rating": 4.2,
    "hourlyRate": 65,
    "experience": "14 years experience",
    "bio": "Victor Clark is a skilled tutor with expertise in Data Science, Machine Learning, JavaScript.",
    "lat": -33.82893623927254,
    "lng": 151.08757605417173,
    "availableTime": [
      {
        "day": "Monday",
        "start": "10:00",
        "end": "12:00"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "16:00"
      },
      {
        "day": "Friday",
        "start": "09:00",
        "end": "11:00"
      }
    ],
    "education": "Master's Degree in Data Science"
  }
];

export default mockTutors;