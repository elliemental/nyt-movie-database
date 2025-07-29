import React, { useState, useMemo } from 'react';
import { Search, Filter, ChevronDown, ChevronUp, Star, Calendar, User, Video, Film, Award, Download, ExternalLink } from 'lucide-react';

const MovieDatabase = () => {
  const [movies] = useState([
    {
      rank: 1, title: "Parasite", year: 2019, 
      directors: ["Bong Joon-ho"], 
      country: "South Korea", genre: "Thriller/Drama",
      cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong", "Choi Woo-shik", "Park So-dam"],
      producers: ["Kwak Sin-ae", "Moon Yang-kwon", "Bong Joon-ho"],
      cinematographers: ["Hong Kyung-pyo"], 
      editors: ["Yang Jin-mo"],
      screenwriters: ["Bong Joon-ho", "Han Jin-won"],
      runtime: 132, rtScore: 99
    },
    {
      rank: 2, title: "Mulholland Drive", year: 2001, 
      directors: ["David Lynch"], country: "USA", genre: "Mystery/Drama",
      cast: ["Naomi Watts", "Laura Harring", "Justin Theroux", "Ann Miller"],
      producers: ["Mary Sweeney", "Alain Sarde", "Neal Edelstein"],
      cinematographers: ["Peter Deming"], editors: ["Mary Sweeney"], screenwriters: ["David Lynch"],
      runtime: 147, rtScore: 84
    },
    {
      rank: 3, title: "There Will Be Blood", year: 2007, 
      directors: ["Paul Thomas Anderson"], country: "USA", genre: "Drama",
      cast: ["Daniel Day-Lewis", "Paul Dano", "Ciarán Hinds", "Dillon Freasier"],
      producers: ["Scott Rudin", "Paul Thomas Anderson", "Daniel Lupi"],
      cinematographers: ["Robert Elswit"], editors: ["Dylan Tichenor"], screenwriters: ["Paul Thomas Anderson"],
      runtime: 158, rtScore: 91
    },
    {
      rank: 4, title: "In the Mood for Love", year: 2000, 
      directors: ["Wong Kar-wai"], country: "Hong Kong", genre: "Romance/Drama",
      cast: ["Maggie Cheung", "Tony Leung Chiu-wai", "Ping-Lam Siu", "Tung Cho Cheung"],
      producers: ["Wong Kar-wai"], cinematographers: ["Christopher Doyle", "Mark Li Ping-bin"],
      editors: ["William Chang"], screenwriters: ["Wong Kar-wai"],
      runtime: 98, rtScore: 90
    },
    {
      rank: 5, title: "Moonlight", year: 2016, 
      directors: ["Barry Jenkins"], country: "USA", genre: "Drama",
      cast: ["Mahershala Ali", "Naomie Harris", "Trevante Rhodes", "André Holland", "Janelle Monáe"],
      producers: ["Adele Romanski", "Dede Gardner", "Jeremy Kleiner"],
      cinematographers: ["James Laxton"], editors: ["Nat Sanders", "Joi McMillon"], screenwriters: ["Barry Jenkins"],
      runtime: 111, rtScore: 98
    },
    {
      rank: 6, title: "No Country for Old Men", year: 2007, 
      directors: ["Joel Coen", "Ethan Coen"], country: "USA", genre: "Thriller/Crime",
      cast: ["Tommy Lee Jones", "Javier Bardem", "Josh Brolin", "Kelly Macdonald"],
      producers: ["Scott Rudin", "Ethan Coen", "Joel Coen"],
      cinematographers: ["Roger Deakins"], editors: ["Roderick Jaynes"], screenwriters: ["Joel Coen", "Ethan Coen"],
      runtime: 122, rtScore: 93
    },
    {
      rank: 7, title: "Eternal Sunshine of the Spotless Mind", year: 2004, 
      directors: ["Michel Gondry"], country: "USA", genre: "Sci-Fi/Romance",
      cast: ["Jim Carrey", "Kate Winslet", "Kirsten Dunst", "Mark Ruffalo", "Elijah Wood"],
      producers: ["Anthony Bregman", "Steve Golin"],
      cinematographers: ["Ellen Kuras"], editors: ["Valdís Óskarsdóttir"], screenwriters: ["Charlie Kaufman"],
      runtime: 108, rtScore: 93
    },
    {
      rank: 8, title: "Get Out", year: 2017, 
      directors: ["Jordan Peele"], country: "USA", genre: "Horror/Thriller",
      cast: ["Daniel Kaluuya", "Allison Williams", "Catherine Keener", "Bradley Whitford"],
      producers: ["Sean McKittrick", "Jason Blum", "Edward H. Hamm Jr."],
      cinematographers: ["Toby Oliver"], editors: ["Gregory Plotkin"], screenwriters: ["Jordan Peele"],
      runtime: 104, rtScore: 98
    },
    {
      rank: 9, title: "Spirited Away", year: 2001, 
      directors: ["Hayao Miyazaki"], country: "Japan", genre: "Animation/Fantasy",
      cast: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki", "Takashi Naito"],
      producers: ["Toshio Suzuki"], cinematographers: ["Atsushi Okui"], editors: ["Takeshi Seyama"],
      screenwriters: ["Hayao Miyazaki"], runtime: 125, rtScore: 97
    },
    {
      rank: 10, title: "The Social Network", year: 2010, 
      directors: ["David Fincher"], country: "USA", genre: "Drama/Biography",
      cast: ["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake", "Armie Hammer"],
      producers: ["Scott Rudin", "Dana Brunetti", "Michael De Luca", "Ceán Chaffin"],
      cinematographers: ["Jeff Cronenweth"], editors: ["Angus Wall", "Kirk Baxter"], screenwriters: ["Aaron Sorkin"],
      runtime: 120, rtScore: 96
    },
    {
      rank: 11, title: "Mad Max: Fury Road", year: 2015, 
      directors: ["George Miller"], country: "Australia/USA", genre: "Action/Adventure",
      cast: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult", "Hugh Keays-Byrne"],
      producers: ["George Miller", "Doug Mitchell", "P.J. Voeten"],
      cinematographers: ["John Seale"], editors: ["Margaret Sixel"],
      screenwriters: ["George Miller", "Brendan McCarthy", "Nick Lathouris"],
      runtime: 120, rtScore: 97
    },
    {
      rank: 12, title: "The Zone of Interest", year: 2023, 
      directors: ["Jonathan Glazer"], country: "UK/USA/Poland", genre: "Drama/History",
      cast: ["Christian Friedel", "Sandra Hüller", "Ralph Herforth", "Freya Kreutzkam"],
      producers: ["James Wilson"], cinematographers: ["Łukasz Żal"], editors: ["Paul Watts"],
      screenwriters: ["Jonathan Glazer"], runtime: 105, rtScore: 93
    },
    {
      rank: 13, title: "Children of Men", year: 2006, 
      directors: ["Alfonso Cuarón"], country: "UK/USA", genre: "Sci-Fi/Thriller",
      cast: ["Clive Owen", "Clare-Hope Ashitey", "Chiwetel Ejiofor", "Julianne Moore"],
      producers: ["Marc Abraham", "Eric Newman", "Hilary Shor", "Iain Smith", "Tony Smith"],
      cinematographers: ["Emmanuel Lubezki"], editors: ["Alfonso Cuarón", "Alex Rodríguez"],
      screenwriters: ["Alfonso Cuarón", "Timothy J. Sexton", "David Arata", "Mark Fergus", "Hawk Ostby"],
      runtime: 109, rtScore: 92
    },
    {
      rank: 14, title: "Inglourious Basterds", year: 2009, 
      directors: ["Quentin Tarantino"], country: "USA/Germany", genre: "War/Drama",
      cast: ["Brad Pitt", "Christoph Waltz", "Mélanie Laurent", "Diane Kruger"],
      producers: ["Lawrence Bender"], cinematographers: ["Robert Richardson"], editors: ["Sally Menke"],
      screenwriters: ["Quentin Tarantino"], runtime: 153, rtScore: 89
    },
    {
      rank: 15, title: "City of God", year: 2002, 
      directors: ["Fernando Meirelles", "Kátia Lund"], country: "Brazil", genre: "Crime/Drama",
      cast: ["Alexandre Rodrigues", "Leandro Firmino", "Phellipe Haagensen", "Douglas Silva"],
      producers: ["Andrea Barata Ribeiro", "Mauricio Andrade Ramos"],
      cinematographers: ["César Charlone"], editors: ["Daniel Rezende"], screenwriters: ["Bráulio Mantovani"],
      runtime: 130, rtScore: 91
    },
    {
      rank: 16, title: "Crouching Tiger, Hidden Dragon", year: 2000, 
      directors: ["Ang Lee"], country: "Taiwan/Hong Kong/USA/China", genre: "Action/Romance",
      cast: ["Chow Yun-fat", "Michelle Yeoh", "Zhang Ziyi", "Chang Chen"],
      producers: ["Hsu Li-kong", "William Kong", "Ang Lee"], cinematographers: ["Peter Pau"],
      editors: ["Tim Squyres"], screenwriters: ["Wang Hui-ling", "James Schamus", "Tsai Kuo Jung"],
      runtime: 120, rtScore: 97
    },
    {
      rank: 17, title: "Brokeback Mountain", year: 2005, 
      directors: ["Ang Lee"], country: "USA", genre: "Romance/Drama",
      cast: ["Heath Ledger", "Jake Gyllenhaal", "Michelle Williams", "Anne Hathaway"],
      producers: ["Diana Ossana", "James Schamus"], cinematographers: ["Rodrigo Prieto"],
      editors: ["Geraldine Peroni", "Dylan Tichenor"], screenwriters: ["Larry McMurtry", "Diana Ossana"],
      runtime: 134, rtScore: 87
    },
    {
      rank: 18, title: "Y Tu Mamá También", year: 2001, 
      directors: ["Alfonso Cuarón"], country: "Mexico", genre: "Drama/Coming-of-age",
      cast: ["Maribel Verdú", "Gael García Bernal", "Diego Luna", "Daniel Giménez Cacho"],
      producers: ["Alfonso Cuarón", "Jorge Vergara"], cinematographers: ["Emmanuel Lubezki"],
      editors: ["Alfonso Cuarón", "Alex Rodríguez"], screenwriters: ["Alfonso Cuarón", "Carlos Cuarón"],
      runtime: 106, rtScore: 92
    },
    {
      rank: 19, title: "Zodiac", year: 2007, 
      directors: ["David Fincher"], country: "USA", genre: "Crime/Thriller",
      cast: ["Jake Gyllenhaal", "Mark Ruffalo", "Robert Downey Jr.", "Anthony Edwards"],
      producers: ["Mike Medavoy", "Arnold Messer", "Bradley J. Fischer", "James Vanderbilt"],
      cinematographers: ["Harris Savides"], editors: ["Angus Wall"], screenwriters: ["James Vanderbilt"],
      runtime: 157, rtScore: 90
    },
    {
      rank: 20, title: "The Wolf of Wall Street", year: 2013, 
      directors: ["Martin Scorsese"], country: "USA", genre: "Biography/Comedy",
      cast: ["Leonardo DiCaprio", "Jonah Hill", "Margot Robbie", "Matthew McConaughey"],
      producers: ["Martin Scorsese", "Leonardo DiCaprio", "Riza Aziz", "Joey McFarland"],
      cinematographers: ["Rodrigo Prieto"], editors: ["Thelma Schoonmaker"], screenwriters: ["Terence Winter"],
      runtime: 180, rtScore: 79
    },
    // Movies 21-40
    {
      rank: 21, title: "The Royal Tenenbaums", year: 2001, 
      directors: ["Wes Anderson"], country: "USA", genre: "Comedy/Drama",
      cast: ["Gene Hackman", "Anjelica Huston", "Ben Stiller", "Gwyneth Paltrow", "Luke Wilson"],
      producers: ["Wes Anderson", "Barry Mendel", "Scott Rudin"],
      cinematographers: ["Robert Yeoman"], editors: ["Dylan Tichenor"], screenwriters: ["Wes Anderson", "Owen Wilson"],
      runtime: 110, rtScore: 81
    },
    {
      rank: 22, title: "The Grand Budapest Hotel", year: 2014, 
      directors: ["Wes Anderson"], country: "Germany/UK/USA", genre: "Comedy/Adventure",
      cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric", "Adrien Brody"],
      producers: ["Wes Anderson", "Scott Rudin", "Steven Rales", "Jeremy Dawson"],
      cinematographers: ["Robert Yeoman"], editors: ["Barney Pilling"], screenwriters: ["Wes Anderson"],
      runtime: 99, rtScore: 92
    },
    {
      rank: 23, title: "Boyhood", year: 2014, 
      directors: ["Richard Linklater"], country: "USA", genre: "Drama/Coming-of-age",
      cast: ["Patricia Arquette", "Ellar Coltrane", "Lorelei Linklater", "Ethan Hawke"],
      producers: ["Richard Linklater", "Cathleen Sutherland"],
      cinematographers: ["Lee Daniel", "Shane Kelly"], editors: ["Sandra Adair"], screenwriters: ["Richard Linklater"],
      runtime: 165, rtScore: 97
    },
    {
      rank: 24, title: "Her", year: 2013, 
      directors: ["Spike Jonze"], country: "USA", genre: "Romance/Sci-Fi",
      cast: ["Joaquin Phoenix", "Scarlett Johansson", "Amy Adams", "Rooney Mara"],
      producers: ["Megan Ellison", "Spike Jonze", "Vincent Landay"],
      cinematographers: ["Hoyte van Hoytema"], editors: ["Jeff Buchanan", "Eric Zumbrunnen"],
      screenwriters: ["Spike Jonze"], runtime: 126, rtScore: 94
    },
    {
      rank: 25, title: "Phantom Thread", year: 2017, 
      directors: ["Paul Thomas Anderson"], country: "USA", genre: "Drama/Romance",
      cast: ["Daniel Day-Lewis", "Vicky Krieps", "Lesley Manville", "Camilla Rutherford"],
      producers: ["Paul Thomas Anderson", "JoAnne Sellar", "Daniel Lupi"],
      cinematographers: ["Paul Thomas Anderson"], editors: ["Dylan Tichenor"],
      screenwriters: ["Paul Thomas Anderson"], runtime: 130, rtScore: 91
    },
    {
      rank: 26, title: "Anatomy of a Fall", year: 2023, 
      directors: ["Justine Triet"], country: "France", genre: "Drama/Thriller",
      cast: ["Sandra Hüller", "Swann Arlaud", "Milo Machado-Graner", "Antoine Reinartz"],
      producers: ["Marie-Ange Luciani", "David Thion"], cinematographers: ["Simon Beaufils"],
      editors: ["Laurent Sénéchal"], screenwriters: ["Justine Triet", "Arthur Harari"],
      runtime: 151, rtScore: 96
    },
    {
      rank: 27, title: "Adaptation", year: 2002, 
      directors: ["Spike Jonze"], country: "USA", genre: "Comedy/Drama",
      cast: ["Nicolas Cage", "Meryl Streep", "Chris Cooper", "Tilda Swinton"],
      producers: ["Edward Saxon", "Vincent Landay", "Jonathan Demme"],
      cinematographers: ["Lance Acord"], editors: ["Eric Zumbrunnen"], screenwriters: ["Charlie Kaufman"],
      runtime: 115, rtScore: 91
    },
    {
      rank: 28, title: "The Dark Knight", year: 2008, 
      directors: ["Christopher Nolan"], country: "USA/UK", genre: "Action/Crime",
      cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine"],
      producers: ["Emma Thomas", "Charles Roven", "Christopher Nolan"],
      cinematographers: ["Wally Pfister"], editors: ["Lee Smith"], screenwriters: ["Jonathan Nolan", "Christopher Nolan"],
      runtime: 152, rtScore: 94
    },
    {
      rank: 29, title: "Arrival", year: 2016, 
      directors: ["Denis Villeneuve"], country: "USA", genre: "Sci-Fi/Drama",
      cast: ["Amy Adams", "Jeremy Renner", "Forest Whitaker", "Michael Stuhlbarg"],
      producers: ["Shawn Levy", "Dan Levine", "Aaron Ryder", "David Linde"],
      cinematographers: ["Bradford Young"], editors: ["Joe Walker"], screenwriters: ["Eric Heisserer"],
      runtime: 116, rtScore: 94
    },
    {
      rank: 30, title: "Lost in Translation", year: 2003, 
      directors: ["Sofia Coppola"], country: "USA/Japan", genre: "Drama/Romance",
      cast: ["Bill Murray", "Scarlett Johansson", "Giovanni Ribisi", "Anna Faris"],
      producers: ["Ross Katz", "Sofia Coppola"], cinematographers: ["Lance Acord"],
      editors: ["Sarah Flack"], screenwriters: ["Sofia Coppola"],
      runtime: 102, rtScore: 95
    },
    {
      rank: 31, title: "The Departed", year: 2006, 
      directors: ["Martin Scorsese"], country: "USA", genre: "Crime/Thriller",
      cast: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson", "Mark Wahlberg"],
      producers: ["Brad Pitt", "Brad Grey", "Graham King"],
      cinematographers: ["Michael Ballhaus"], editors: ["Thelma Schoonmaker"], screenwriters: ["William Monahan"],
      runtime: 151, rtScore: 90
    },
    {
      rank: 32, title: "Bridesmaids", year: 2011, 
      directors: ["Paul Feig"], country: "USA", genre: "Comedy",
      cast: ["Kristen Wiig", "Maya Rudolph", "Rose Byrne", "Melissa McCarthy"],
      producers: ["Judd Apatow", "Barry Mendel", "Clayton Townsend"],
      cinematographers: ["Robert Yeoman"], editors: ["Michael L. Sale", "William Kerr"],
      screenwriters: ["Annie Mumolo", "Kristen Wiig"], runtime: 125, rtScore: 90
    },
    {
      rank: 33, title: "A Separation", year: 2011, 
      directors: ["Asghar Farhadi"], country: "Iran", genre: "Drama",
      cast: ["Peyman Moaadi", "Leila Hatami", "Sareh Bayat", "Shahab Hosseini"],
      producers: ["Asghar Farhadi"], cinematographers: ["Mahmoud Kalari"],
      editors: ["Hayedeh Safiyari"], screenwriters: ["Asghar Farhadi"],
      runtime: 123, rtScore: 99
    },
    {
      rank: 34, title: "WALL-E", year: 2008, 
      directors: ["Andrew Stanton"], country: "USA", genre: "Animation/Family",
      cast: ["Ben Burtt", "Elissa Knight", "Jeff Garlin", "Fred Willard"],
      producers: ["Jim Morris"], cinematographers: ["Jeremy Lasky", "Danielle Feinberg"],
      editors: ["Stephen Schaffer"], screenwriters: ["Andrew Stanton", "Pete Docter"],
      runtime: 98, rtScore: 95
    },
    {
      rank: 35, title: "A Prophet", year: 2009, 
      directors: ["Jacques Audiard"], country: "France/Italy", genre: "Crime/Drama",
      cast: ["Tahar Rahim", "Niels Arestrup", "Adel Bencherif", "Reda Kateb"],
      producers: ["Marco Cherqui", "Alain Attal"], cinematographers: ["Stéphane Fontaine"],
      editors: ["Juliette Welfling"], screenwriters: ["Thomas Bidegain", "Abdel Raouf Dafri", "Nicolas Peufaillit"],
      runtime: 155, rtScore: 97
    },
    {
      rank: 36, title: "A Serious Man", year: 2009, 
      directors: ["Joel Coen", "Ethan Coen"], country: "USA", genre: "Comedy/Drama",
      cast: ["Michael Stuhlbarg", "Richard Kind", "Sari Lennick", "Aaron Wolff"],
      producers: ["Joel Coen", "Ethan Coen"], cinematographers: ["Roger Deakins"],
      editors: ["Roderick Jaynes"], screenwriters: ["Joel Coen", "Ethan Coen"],
      runtime: 106, rtScore: 89
    },
    {
      rank: 37, title: "Call Me by Your Name", year: 2017, 
      directors: ["Luca Guadagnino"], country: "Italy/France/USA", genre: "Romance/Drama",
      cast: ["Timothée Chalamet", "Armie Hammer", "Michael Stuhlbarg", "Amira Casar"],
      producers: ["Peter Spears", "Luca Guadagnino", "Emilie Georges", "Marco Morabito"],
      cinematographers: ["Sayombhu Mukdeeprom"], editors: ["Walter Fasano"], screenwriters: ["James Ivory"],
      runtime: 132, rtScore: 95
    },
    {
      rank: 38, title: "Portrait of a Lady on Fire", year: 2019, 
      directors: ["Céline Sciamma"], country: "France", genre: "Romance/Drama",
      cast: ["Noémie Merlant", "Adèle Haenel", "Luàna Bajrami", "Valeria Golino"],
      producers: ["Bénédicte Couvreur"], cinematographers: ["Claire Mathon"],
      editors: ["Julien Lacheray"], screenwriters: ["Céline Sciamma"],
      runtime: 122, rtScore: 98
    },
    {
      rank: 39, title: "Lady Bird", year: 2017, 
      directors: ["Greta Gerwig"], country: "USA", genre: "Comedy/Drama",
      cast: ["Saoirse Ronan", "Laurie Metcalf", "Tracy Letts", "Lucas Hedges"],
      producers: ["Scott Rudin", "Eli Bush", "Evelyn O'Neill"],
      cinematographers: ["Sam Levy"], editors: ["Nick Houy"], screenwriters: ["Greta Gerwig"],
      runtime: 94, rtScore: 99
    },
    {
      rank: 40, title: "The Master", year: 2012, 
      directors: ["Paul Thomas Anderson"], country: "USA", genre: "Drama",
      cast: ["Philip Seymour Hoffman", "Joaquin Phoenix", "Amy Adams", "Laura Dern"],
      producers: ["Paul Thomas Anderson", "Daniel Lupi", "JoAnne Sellar"],
      cinematographers: ["Mihai Mălaimare Jr."], editors: ["Peter McNulty", "Leslie Jones"],
      screenwriters: ["Paul Thomas Anderson"], runtime: 144, rtScore: 85
    },
    // Movies 41-60
    {
      rank: 41, title: "Amélie", year: 2001, 
      directors: ["Jean-Pierre Jeunet"], country: "France", genre: "Romance/Comedy",
      cast: ["Audrey Tautou", "Mathieu Kassovitz", "Rufus", "Lorella Cravotta"],
      producers: ["Claudie Ossard", "Jean-Marc Deschamps"], cinematographers: ["Bruno Delbonnel"],
      editors: ["Hervé Schneid"], screenwriters: ["Guillaume Laurant", "Jean-Pierre Jeunet"],
      runtime: 122, rtScore: 89
    },
    {
      rank: 42, title: "The Lives of Others", year: 2006, 
      directors: ["Florian Henckel von Donnersmarck"], country: "Germany", genre: "Drama/Thriller",
      cast: ["Ulrich Mühe", "Martina Gedeck", "Sebastian Koch", "Ulrich Tukur"],
      producers: ["Quirin Berg", "Max Wiedemann"], cinematographers: ["Hagen Bogdanski"],
      editors: ["Patricia Rommel"], screenwriters: ["Florian Henckel von Donnersmarck"],
      runtime: 137, rtScore: 93
    },
    {
      rank: 43, title: "Oldboy", year: 2003, 
      directors: ["Park Chan-wook"], country: "South Korea", genre: "Action/Thriller",
      cast: ["Choi Min-sik", "Yoo Ji-tae", "Kang Hye-jung", "Kim Byeong-ok"],
      producers: ["Lim Seung-yong"], cinematographers: ["Chung Chung-hoon"],
      editors: ["Kim Sang-bum"], screenwriters: ["Hwang Jo-yun", "Lim Joon-hyung", "Park Chan-wook"],
      runtime: 120, rtScore: 82
    },
    {
      rank: 44, title: "Once Upon a Time in Hollywood", year: 2019, 
      directors: ["Quentin Tarantino"], country: "USA", genre: "Comedy/Drama",
      cast: ["Leonardo DiCaprio", "Brad Pitt", "Margot Robbie", "Emile Hirsch"],
      producers: ["David Heyman", "Shannon McIntosh", "Quentin Tarantino"],
      cinematographers: ["Robert Richardson"], editors: ["Fred Raskin"], screenwriters: ["Quentin Tarantino"],
      runtime: 161, rtScore: 85
    },
    {
      rank: 45, title: "Moneyball", year: 2011, 
      directors: ["Bennett Miller"], country: "USA", genre: "Biography/Drama",
      cast: ["Brad Pitt", "Jonah Hill", "Philip Seymour Hoffman", "Robin Wright"],
      producers: ["Michael De Luca", "Rachael Horovitz", "Brad Pitt"],
      cinematographers: ["Wally Pfister"], editors: ["Dan Hanley", "Mike Hill"], screenwriters: ["Steven Zaillian", "Aaron Sorkin"],
      runtime: 133, rtScore: 94
    },
    {
      rank: 46, title: "Roma", year: 2018, 
      directors: ["Alfonso Cuarón"], country: "Mexico", genre: "Drama",
      cast: ["Yalitza Aparicio", "Marina de Tavira", "Diego Cortina Autrey", "Carlos Peralta"],
      producers: ["Gabriela Rodríguez", "Alfonso Cuarón"], cinematographers: ["Alfonso Cuarón"],
      editors: ["Alfonso Cuarón"], screenwriters: ["Alfonso Cuarón"],
      runtime: 135, rtScore: 96
    },
    {
      rank: 47, title: "Almost Famous", year: 2000, 
      directors: ["Cameron Crowe"], country: "USA", genre: "Comedy/Drama",
      cast: ["Billy Crudup", "Frances McDormand", "Kate Hudson", "Patrick Fugit"],
      producers: ["Ian Bryce", "Cameron Crowe"], cinematographers: ["John Toll"],
      editors: ["Joe Hutshing", "Saar Klein"], screenwriters: ["Cameron Crowe"],
      runtime: 122, rtScore: 89
    },
    {
      rank: 48, title: "Before Sunset", year: 2004, 
      directors: ["Richard Linklater"], country: "USA", genre: "Drama/Romance",
      cast: ["Ethan Hawke", "Julie Delpy", "Vernon Dobtcheff", "Louise Lemoine Torrès"],
      producers: ["Anne Walker-McBay"], cinematographers: ["Lee Daniel"],
      editors: ["Sandra Adair"], screenwriters: ["Richard Linklater", "Julie Delpy", "Ethan Hawke"],
      runtime: 80, rtScore: 95
    },
    {
      rank: 49, title: "Up", year: 2009, 
      directors: ["Pete Docter", "Bob Peterson"], country: "USA", genre: "Animation/Adventure",
      cast: ["Ed Asner", "Christopher Plummer", "Jordan Nagai", "Bob Peterson"],
      producers: ["Jonas Rivera"], cinematographers: ["Patrick Lin", "Jean-Claude Kalache"],
      editors: ["Kevin Nolting"], screenwriters: ["Bob Peterson", "Pete Docter", "Thomas McCarthy"],
      runtime: 96, rtScore: 98
    },
    {
      rank: 50, title: "12 Years a Slave", year: 2013, 
      directors: ["Steve McQueen"], country: "USA/UK", genre: "Biography/Drama",
      cast: ["Chiwetel Ejiofor", "Michael Fassbender", "Benedict Cumberbatch", "Lupita Nyong'o"],
      producers: ["Brad Pitt", "Dede Gardner", "Jeremy Kleiner", "Steve McQueen"],
      cinematographers: ["Sean Bobbitt"], editors: ["Joe Walker"], screenwriters: ["John Ridley"],
      runtime: 134, rtScore: 95
    },
    {
      rank: 51, title: "The Favourite", year: 2018, 
      directors: ["Yorgos Lanthimos"], country: "Ireland/UK/USA", genre: "Biography/Comedy",
      cast: ["Olivia Colman", "Emma Stone", "Rachel Weisz", "Nicholas Hoult"],
      producers: ["Ceci Dempsey", "Ed Guiney", "Lee Magiday", "Yorgos Lanthimos"],
      cinematographers: ["Robbie Ryan"], editors: ["Yorgos Mavropsaridis"], screenwriters: ["Deborah Davis", "Tony McNamara"],
      runtime: 119, rtScore: 93
    },
    {
      rank: 52, title: "Borat", year: 2006, 
      directors: ["Larry Charles"], country: "USA/UK", genre: "Comedy",
      cast: ["Sacha Baron Cohen", "Ken Davitian", "Luenell", "Chester"],
      producers: ["Sacha Baron Cohen", "Jay Roach"], cinematographers: ["Luke Geissbühler", "Anthony Hardwick"],
      editors: ["Peter Teschner", "Craig Alpert", "James Thomas"], screenwriters: ["Sacha Baron Cohen", "Anthony Hines", "Peter Baynham", "Dan Mazer"],
     runtime: 84, rtScore: 91
   },
   {
     rank: 53, title: "Pan's Labyrinth", year: 2006, 
     directors: ["Guillermo del Toro"], country: "Spain/Mexico", genre: "Drama/Fantasy",
     cast: ["Sergi López", "Maribel Verdú", "Ivana Baquero", "Doug Jones"],
     producers: ["Guillermo del Toro", "Alfonso Cuarón", "Bertha Navarro"],
     cinematographers: ["Guillermo Navarro"], editors: ["Bernat Vilaplana"], screenwriters: ["Guillermo del Toro"],
     runtime: 118, rtScore: 95
   },
   {
     rank: 54, title: "Inception", year: 2010, 
     directors: ["Christopher Nolan"], country: "USA/UK", genre: "Action/Sci-Fi",
     cast: ["Leonardo DiCaprio", "Marion Cotillard", "Tom Hardy", "Ellen Page"],
     producers: ["Emma Thomas", "Christopher Nolan"], cinematographers: ["Wally Pfister"],
     editors: ["Lee Smith"], screenwriters: ["Christopher Nolan"],
     runtime: 148, rtScore: 87
   },
   {
     rank: 55, title: "Punch-Drunk Love", year: 2002, 
     directors: ["Paul Thomas Anderson"], country: "USA", genre: "Comedy/Drama",
     cast: ["Adam Sandler", "Emily Watson", "Philip Seymour Hoffman", "Luis Guzmán"],
     producers: ["JoAnne Sellar", "Paul Thomas Anderson"], cinematographers: ["Robert Elswit"],
     editors: ["Leslie Jones"], screenwriters: ["Paul Thomas Anderson"],
     runtime: 95, rtScore: 78
   },
   {
     rank: 56, title: "Best in Show", year: 2000, 
     directors: ["Christopher Guest"], country: "USA", genre: "Comedy",
     cast: ["Eugene Levy", "Catherine O'Hara", "Parker Posey", "Christopher Guest"],
     producers: ["Karen Murphy"], cinematographers: ["Roberto Schaefer"],
     editors: ["Robert Leighton"], screenwriters: ["Christopher Guest", "Eugene Levy"],
     runtime: 90, rtScore: 93
   },
   {
     rank: 57, title: "Uncut Gems", year: 2019, 
     directors: ["Josh Safdie", "Benny Safdie"], country: "USA", genre: "Crime/Thriller",
     cast: ["Adam Sandler", "LaKeith Stanfield", "Julia Fox", "Kevin Garnett"],
     producers: ["Scott Rudin", "Eli Bush", "Sebastian Bear-McClard"],
     cinematographers: ["Darius Khondji"], editors: ["Ronald Bronstein", "Benny Safdie"],
     screenwriters: ["Josh Safdie", "Benny Safdie", "Ronald Bronstein"], runtime: 135, rtScore: 92
   },
   {
     rank: 58, title: "Toni Erdmann", year: 2016, 
     directors: ["Maren Ade"], country: "Germany/Austria", genre: "Comedy/Drama",
     cast: ["Peter Simonischek", "Sandra Hüller", "Michael Wittenborn", "Thomas Loibl"],
     producers: ["Janine Jackowski", "Jonas Dornbach", "Maren Ade"],
     cinematographers: ["Patrick Orth"], editors: ["Heike Parplies"], screenwriters: ["Maren Ade"],
     runtime: 162, rtScore: 92
   },
   {
     rank: 59, title: "Whiplash", year: 2014, 
     directors: ["Damien Chazelle"], country: "USA", genre: "Drama/Music",
     cast: ["Miles Teller", "J.K. Simmons", "Paul Reiser", "Melissa Benoist"],
     producers: ["Jason Blum", "Helen Estabrook", "David Lancaster"],
     cinematographers: ["Sharone Meir"], editors: ["Tom Cross"], screenwriters: ["Damien Chazelle"],
     runtime: 106, rtScore: 94
   },
   {
     rank: 60, title: "Kill Bill: Vol. 1", year: 2003, 
     directors: ["Quentin Tarantino"], country: "USA", genre: "Action/Crime",
     cast: ["Uma Thurman", "Lucy Liu", "Vivica A. Fox", "Daryl Hannah"],
     producers: ["Lawrence Bender"], cinematographers: ["Robert Richardson"],
     editors: ["Sally Menke"], screenwriters: ["Quentin Tarantino"],
     runtime: 111, rtScore: 85
   },
   // Movies 61-80
   {
     rank: 61, title: "Memento", year: 2000, 
     directors: ["Christopher Nolan"], country: "USA", genre: "Mystery/Thriller",
     cast: ["Guy Pearce", "Carrie-Anne Moss", "Joe Pantoliano", "Mark Boone Jr."],
     producers: ["Suzanne Todd", "Jennifer Todd"], cinematographers: ["Wally Pfister"],
     editors: ["Dody Dorn"], screenwriters: ["Christopher Nolan"],
     runtime: 113, rtScore: 93
   },
   {
     rank: 62, title: "Little Miss Sunshine", year: 2006, 
     directors: ["Jonathan Dayton", "Valerie Faris"], country: "USA", genre: "Comedy/Drama",
     cast: ["Steve Carell", "Toni Collette", "Greg Kinnear", "Abigail Breslin"],
     producers: ["Albert Berger", "Ron Yerxa"], cinematographers: ["Tim Suhrstedt"],
     editors: ["Pamela Martin"], screenwriters: ["Michael Arndt"],
     runtime: 101, rtScore: 91
   },
   {
     rank: 63, title: "Gone Girl", year: 2014, 
     directors: ["David Fincher"], country: "USA", genre: "Drama/Thriller",
     cast: ["Ben Affleck", "Rosamund Pike", "Neil Patrick Harris", "Tyler Perry"],
     producers: ["Ceán Chaffin", "Joshua Donen", "Reese Witherspoon"],
     cinematographers: ["Jeff Cronenweth"], editors: ["Kirk Baxter"], screenwriters: ["Gillian Flynn"],
     runtime: 149, rtScore: 87
   },
   {
     rank: 64, title: "Oppenheimer", year: 2023, 
     directors: ["Christopher Nolan"], country: "USA/UK", genre: "Biography/Drama",
     cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon", "Robert Downey Jr."],
     producers: ["Emma Thomas", "Christopher Nolan", "Charles Roven"],
     cinematographers: ["Hoyte van Hoytema"], editors: ["Lee Smith"], screenwriters: ["Christopher Nolan"],
     runtime: 180, rtScore: 93
   },
   {
     rank: 65, title: "Spotlight", year: 2015, 
     directors: ["Tom McCarthy"], country: "USA", genre: "Biography/Crime",
     cast: ["Mark Ruffalo", "Michael Keaton", "Rachel McAdams", "Liev Schreiber"],
     producers: ["Blye Pagon Faust", "Steve Golin", "Nicole Rocklin", "Tom McCarthy"],
     cinematographers: ["Masanobu Takayanagi"], editors: ["Tom McArdle"], screenwriters: ["Josh Singer", "Tom McCarthy"],
     runtime: 128, rtScore: 97
   },
   {
     rank: 66, title: "Tár", year: 2022, 
     directors: ["Todd Field"], country: "USA/Germany", genre: "Drama/Music",
     cast: ["Cate Blanchett", "Nina Hoss", "Noémie Merlant", "Sophie Kauer"],
     producers: ["Todd Field", "Alexandra Milchan", "Scott Lambert"],
     cinematographers: ["Florian Hoffmeister"], editors: ["Monika Willi"], screenwriters: ["Todd Field"],
     runtime: 158, rtScore: 91
   },
   {
     rank: 67, title: "The Hurt Locker", year: 2008, 
     directors: ["Kathryn Bigelow"], country: "USA", genre: "Drama/Thriller",
     cast: ["Jeremy Renner", "Anthony Mackie", "Brian Geraghty", "Guy Pearce"],
     producers: ["Kathryn Bigelow", "Mark Boal", "Nicolas Chartier", "Greg Shapiro"],
     cinematographers: ["Barry Ackroyd"], editors: ["Bob Murawski", "Chris Innis"], screenwriters: ["Mark Boal"],
     runtime: 127, rtScore: 97
   },
   {
     rank: 68, title: "Under the Skin", year: 2013, 
     directors: ["Jonathan Glazer"], country: "UK/USA/Switzerland", genre: "Drama/Horror",
     cast: ["Scarlett Johansson", "Jeremy McWilliams", "Lynsey Taylor Mackay", "Dougie McConnell"],
     producers: ["Nick Wechsler", "James Wilson"], cinematographers: ["Daniel Landin"],
     editors: ["Paul Watts"], screenwriters: ["Walter Campbell", "Jonathan Glazer"],
     runtime: 108, rtScore: 83
   },
   {
     rank: 69, title: "Let the Right One In", year: 2008, 
     directors: ["Tomas Alfredson"], country: "Sweden", genre: "Drama/Horror",
     cast: ["Kåre Hedebrant", "Lina Leandersson", "Per Ragnar", "Henrik Dahl"],
     producers: ["John Nordling", "Carl Molinder"], cinematographers: ["Hoyte van Hoytema"],
     editors: ["Dino Jonsäter", "Kai Nordberg"], screenwriters: ["John Ajvide Lindqvist"],
     runtime: 114, rtScore: 98
   },
   {
     rank: 70, title: "Ocean's Eleven", year: 2001, 
     directors: ["Steven Soderbergh"], country: "USA", genre: "Crime/Thriller",
     cast: ["George Clooney", "Brad Pitt", "Matt Damon", "Andy García"],
     producers: ["Jerry Weintraub"], cinematographers: ["Peter Andrews"],
     editors: ["Stephen Mirrione"], screenwriters: ["Ted Griffin"],
     runtime: 116, rtScore: 82
   },
   {
     rank: 71, title: "Carol", year: 2015, 
     directors: ["Todd Haynes"], country: "USA/UK", genre: "Drama/Romance",
     cast: ["Cate Blanchett", "Rooney Mara", "Sarah Paulson", "Kyle Chandler"],
     producers: ["Elizabeth Karlsen", "Stephen Woolley", "Christine Vachon"],
     cinematographers: ["Edward Lachman"], editors: ["Affonso Gonçalves"], screenwriters: ["Phyllis Nagy"],
     runtime: 118, rtScore: 94
   },
   {
     rank: 72, title: "Ratatouille", year: 2007, 
     directors: ["Brad Bird"], country: "USA", genre: "Animation/Comedy",
     cast: ["Patton Oswalt", "Ian Holm", "Lou Romano", "Brian Dennehy"],
     producers: ["Brad Lewis"], cinematographers: ["Sharon Calahan", "Robert Anderson"],
     editors: ["Darren T. Holmes"], screenwriters: ["Brad Bird"],
     runtime: 111, rtScore: 96
   },
   {
     rank: 73, title: "The Florida Project", year: 2017, 
     directors: ["Sean Baker"], country: "USA", genre: "Drama",
     cast: ["Brooklyn Prince", "Bria Vinaite", "Willem Dafoe", "Christopher Rivera"],
     producers: ["Sean Baker", "Chris Bergoch", "Kevin Chinoy", "Andrew Duncan"],
     cinematographers: ["Alexis Zabe"], editors: ["Sean Baker"], screenwriters: ["Sean Baker", "Chris Bergoch"],
     runtime: 111, rtScore: 96
   },
   {
     rank: 74, title: "Amour", year: 2012, 
     directors: ["Michael Haneke"], country: "Austria/France/Germany", genre: "Drama/Romance",
     cast: ["Jean-Louis Trintignant", "Emmanuelle Riva", "Isabelle Huppert", "Alexandre Tharaud"],
     producers: ["Margaret Menegoz", "Stefan Arndt", "Veit Heiduschka", "Michael Katz"],
     cinematographers: ["Darius Khondji"], editors: ["Monika Willi", "Nadine Muse"],
     screenwriters: ["Michael Haneke"], runtime: 127, rtScore: 93
   },
   {
     rank: 75, title: "O Brother, Where Art Thou?", year: 2000, 
     directors: ["Joel Coen", "Ethan Coen"], country: "USA", genre: "Adventure/Comedy",
     cast: ["George Clooney", "John Turturro", "Tim Blake Nelson", "John Goodman"],
     producers: ["Ethan Coen"], cinematographers: ["Roger Deakins"],
     editors: ["Roderick Jaynes"], screenwriters: ["Ethan Coen", "Joel Coen"],
     runtime: 107, rtScore: 78
   },
   {
     rank: 76, title: "Everything Everywhere All at Once", year: 2022, 
     directors: ["Daniel Kwan", "Daniel Scheinert"], country: "USA", genre: "Action/Adventure",
     cast: ["Michelle Yeoh", "Stephanie Hsu", "Ke Huy Quan", "Jamie Lee Curtis"],
     producers: ["Anthony Russo", "Joe Russo", "Mike Larocca", "Jonathan Wang"],
     cinematographers: ["Larkin Seiple"], editors: ["Paul Drodge"], screenwriters: ["Daniel Kwan", "Daniel Scheinert"],
     runtime: 139, rtScore: 95
   },
   {
     rank: 77, title: "Aftersun", year: 2022, 
     directors: ["Charlotte Wells"], country: "UK/USA", genre: "Drama",
     cast: ["Paul Mescal", "Frankie Corio", "Celia Rowlson-Hall", "Sally Messham"],
     producers: ["Adele Romanski", "Barry Jenkins", "Mark Ceryak"],
     cinematographers: ["Gregory Oke"], editors: ["Blair McClendon"], screenwriters: ["Charlotte Wells"],
     runtime: 102, rtScore: 95
   },
   {
     rank: 78, title: "The Tree of Life", year: 2011, 
     directors: ["Terrence Malick"], country: "USA", genre: "Drama/Fantasy",
     cast: ["Brad Pitt", "Sean Penn", "Jessica Chastain", "Hunter McCracken"],
     producers: ["Nominees", "Sarah Green", "Bill Bannerman", "Brad Pitt"],
     cinematographers: ["Emmanuel Lubezki"], editors: ["Hank Corwin", "Jay Rabinowitz", "Daniel Rezende", "Billy Weber", "Mark Yoshikawa"],
     screenwriters: ["Terrence Malick"], runtime: 139, rtScore: 84
   },
   {
     rank: 79, title: "Volver", year: 2006, 
     directors: ["Pedro Almodóvar"], country: "Spain", genre: "Comedy/Drama",
     cast: ["Penélope Cruz", "Carmen Maura", "Lola Dueñas", "Blanca Portillo"],
     producers: ["Esther García"], cinematographers: ["José Luis Alcaine"],
     editors: ["José Salcedo"], screenwriters: ["Pedro Almodóvar"],
     runtime: 121, rtScore: 91
   },
   {
     rank: 80, title: "Black Swan", year: 2010, 
     directors: ["Darren Aronofsky"], country: "USA", genre: "Drama/Thriller",
     cast: ["Natalie Portman", "Mila Kunis", "Vincent Cassel", "Barbara Hershey"],
     producers: ["Mike Medavoy", "Arnold Messer", "Brian Oliver", "Scott Franklin"],
     cinematographers: ["Matthew Libatique"], editors: ["Andrew Weisblum"], screenwriters: ["Mark Heyman", "Andres Heinz", "John McLaughlin"],
     runtime: 108, rtScore: 85
   },
   // Movies 81-100
   {
     rank: 81, title: "The Act of Killing", year: 2012, 
     directors: ["Joshua Oppenheimer", "Anonymous", "Christine Cynn"], country: "Denmark/Norway/UK", genre: "Documentary",
     cast: ["Anwar Congo", "Herman Koto", "Syamsul Arifin", "Ibrahim Sinik"],
     producers: ["Signe Byrge Sørensen", "Joram ten Brink"], cinematographers: ["Lars Skree", "Carlos Arango de Montis"],
     editors: ["Niels Pagh Andersen", "Janus Billeskov Jansen", "Mariko Montpetit", "Charlotte Munch Bengtsen"],
     screenwriters: ["Joshua Oppenheimer"], runtime: 117, rtScore: 95
   },
   {
     rank: 82, title: "Inside Llewyn Davis", year: 2013, 
     directors: ["Joel Coen", "Ethan Coen"], country: "USA/UK/France", genre: "Comedy/Drama",
     cast: ["Oscar Isaac", "Carey Mulligan", "John Goodman", "Garrett Hedlund"],
     producers: ["Scott Rudin", "Ethan Coen", "Joel Coen"], cinematographers: ["Bruno Delbonnel"],
     editors: ["Roderick Jaynes"], screenwriters: ["Joel Coen", "Ethan Coen"],
     runtime: 104, rtScore: 92
   },
   {
     rank: 83, title: "Melancholia", year: 2011, 
     directors: ["Lars von Trier"], country: "Denmark/Sweden/France/Germany", genre: "Drama/Sci-Fi",
     cast: ["Kirsten Dunst", "Charlotte Gainsbourg", "Kiefer Sutherland", "Alexander Skarsgård"],
     producers: ["Louise Vesth"], cinematographers: ["Manuel Alberto Claro"],
     editors: ["Molly Malene Stensgaard"], screenwriters: ["Lars von Trier"],
     runtime: 135, rtScore: 80
   },
   {
     rank: 84, title: "Anchorman", year: 2004, 
     directors: ["Adam McKay"], country: "USA", genre: "Comedy",
     cast: ["Will Ferrell", "Christina Applegate", "Paul Rudd", "Steve Carell"],
     producers: ["Judd Apatow"], cinematographers: ["Thomas Ackerman"],
     editors: ["Brent White"], screenwriters: ["Will Ferrell", "Adam McKay"],
     runtime: 94, rtScore: 66
   },
   {
     rank: 85, title: "Past Lives", year: 2023, 
     directors: ["Celine Song"], country: "USA", genre: "Drama/Romance",
     cast: ["Greta Lee", "Teo Yoo", "John Magaro", "Moon Seung-ah"],
     producers: ["David Hinojosa", "Christine Vachon", "Pamela Koffler"],
     cinematographers: ["Shabier Kirchner"], editors: ["Keith Fraase"], screenwriters: ["Celine Song"],
     runtime: 105, rtScore: 95
   },
   {
     rank: 86, title: "The Fellowship of the Ring", year: 2001, 
     directors: ["Peter Jackson"], country: "New Zealand/USA", genre: "Adventure/Drama",
     cast: ["Elijah Wood", "Ian McKellen", "Orlando Bloom", "Sean Bean"],
     producers: ["Barrie M. Osborne", "Peter Jackson", "Fran Walsh", "Tim Sanders"],
     cinematographers: ["Andrew Lesnie"], editors: ["John Gilbert"], screenwriters: ["Fran Walsh", "Philippa Boyens", "Peter Jackson"],
     runtime: 178, rtScore: 91
   },
   {
     rank: 87, title: "The Gleaners and I", year: 2000, 
     directors: ["Agnès Varda"], country: "France", genre: "Documentary",
     cast: ["Agnès Varda", "François Wertheimer", "Jean La Planche", "Bodan Litnanski"],
     producers: ["Agnès Varda"], cinematographers: ["Agnès Varda", "Didier Rouget", "Didier Doussin", "Pascal Sautelet", "Stéphane Krausz"],
     editors: ["Agnès Varda", "Laurent Pineau"], screenwriters: ["Agnès Varda"],
     runtime: 82, rtScore: 100
   },
   {
     rank: 88, title: "Interstellar", year: 2014, 
     directors: ["Christopher Nolan"], country: "USA/UK", genre: "Adventure/Drama",
     cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"],
     producers: ["Emma Thomas", "Christopher Nolan", "Lynda Obst"],
     cinematographers: ["Hoyte van Hoytema"], editors: ["Lee Smith"], screenwriters: ["Jonathan Nolan", "Christopher Nolan"],
     runtime: 169, rtScore: 72
   },
   {
     rank: 89, title: "Frances Ha", year: 2012, 
     directors: ["Noah Baumbach"], country: "USA", genre: "Comedy/Drama",
     cast: ["Greta Gerwig", "Mickey Sumner", "Adam Driver", "Michael Esper"],
     producers: ["Scott Rudin"], cinematographers: ["Sam Levy"],
     editors: ["Jennifer Lame"], screenwriters: ["Noah Baumbach", "Greta Gerwig"],
     runtime: 86, rtScore: 92
   },
   {
     rank: 90, title: "Fish Tank", year: 2009, 
     directors: ["Andrea Arnold"], country: "UK", genre: "Drama",
     cast: ["Katie Jarvis", "Michael Fassbender", "Kierston Wareing", "Rebecca Griffiths"],
     producers: ["Kees Kasander", "Nick Laws"], cinematographers: ["Robbie Ryan"],
     editors: ["Nicolas Chaudeurge"], screenwriters: ["Andrea Arnold"],
     runtime: 123, rtScore: 91
   },
   {
     rank: 91, title: "Gladiator", year: 2000, 
     directors: ["Ridley Scott"], country: "USA/UK", genre: "Action/Adventure",
     cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen", "Oliver Reed"],
     producers: ["Douglas Wick", "David Franzoni", "Branko Lustig"],
     cinematographers: ["John Mathieson"], editors: ["Pietro Scalia"], screenwriters: ["David Franzoni", "John Logan", "William Nicholson"],
     runtime: 155, rtScore: 76
   },
   {
     rank: 92, title: "Michael Clayton", year: 2007, 
     directors: ["Tony Gilroy"], country: "USA", genre: "Crime/Drama",
     cast: ["George Clooney", "Tom Wilkinson", "Tilda Swinton", "Sydney Pollack"],
     producers: ["Jennifer Fox", "Kerry Orent", "Steven Samuels"],
     cinematographers: ["Robert Elswit"], editors: ["John Gilroy"], screenwriters: ["Tony Gilroy"],
     runtime: 119, rtScore: 90
   },
   {
     rank: 93, title: "Minority Report", year: 2002, 
     directors: ["Steven Spielberg"], country: "USA", genre: "Action/Crime",
     cast: ["Tom Cruise", "Colin Farrell", "Samantha Morton", "Max von Sydow"],
     producers: ["Gerald R. Molen", "Bonnie Curtis", "Walter F. Parkes"],
     cinematographers: ["Janusz Kamiński"], editors: ["Michael Kahn"], screenwriters: ["Scott Frank", "Jon Cohen"],
     runtime: 145, rtScore: 90
   },
   {
     rank: 94, title: "The Worst Person in the World", year: 2021, 
     directors: ["Joachim Trier"], country: "Norway/France/Denmark/Sweden", genre: "Comedy/Drama",
     cast: ["Renate Reinsve", "Anders Danielsen Lie", "Herbert Nordrum", "Hans Olav Brenner"],
     producers: ["Thomas Robsahm"], cinematographers: ["Kasper Tuxen"],
     editors: ["Olivier Bugge Coutté"], screenwriters: ["Eskil Vogt", "Joachim Trier"],
     runtime: 121, rtScore: 96
   },
   {
     rank: 95, title: "Black Panther", year: 2018, 
     directors: ["Ryan Coogler"], country: "USA", genre: "Action/Adventure",
     cast: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o", "Danai Gurira"],
     producers: ["Kevin Feige"], cinematographers: ["Rachel Morrison"],
     editors: ["Michael P. Shawver", "Claudia Castello"], screenwriters: ["Ryan Coogler", "Joe Robert Cole"],
     runtime: 134, rtScore: 96
   },
   {
     rank: 96, title: "Gravity", year: 2013, 
     directors: ["Alfonso Cuarón"], country: "UK/USA", genre: "Drama/Sci-Fi",
     cast: ["Sandra Bullock", "George Clooney", "Ed Harris", "Orto Ignatiussen"],
     producers: ["Alfonso Cuarón", "David Heyman"], cinematographers: ["Emmanuel Lubezki"],
     editors: ["Alfonso Cuarón", "Mark Sanger"], screenwriters: ["Alfonso Cuarón", "Jonás Cuarón"],
     runtime: 91, rtScore: 96
   },
   {
     rank: 97, title: "Grizzly Man", year: 2005, 
     directors: ["Werner Herzog"], country: "USA", genre: "Documentary",
     cast: ["Timothy Treadwell", "Amie Huguenard", "Werner Herzog", "Willy Fulton"],
     producers: ["Erik Nelson"], cinematographers: ["Peter Zeitlinger"],
     editors: ["Joe Bini"], screenwriters: ["Werner Herzog"],
     runtime: 103, rtScore: 93
   },
   {
     rank: 98, title: "Memories of Murder", year: 2003, 
     directors: ["Bong Joon-ho"], country: "South Korea", genre: "Crime/Drama",
     cast: ["Song Kang-ho", "Kim Sang-kyung", "Kim Roe-ha", "Park Hae-il"],
     producers: ["Cha Seung-jae"], cinematographers: ["Kim Hyung-ku"],
     editors: ["Sun Min-kyung"], screenwriters: ["Bong Joon-ho", "Shim Sung-bo"],
     runtime: 132, rtScore: 95
   },
   {
     rank: 99, title: "Superbad", year: 2007, 
     directors: ["Greg Mottola"], country: "USA", genre: "Comedy",
     cast: ["Jonah Hill", "Michael Cera", "Christopher Mintz-Plasse", "Bill Hader"],
     producers: ["Judd Apatow", "Shauna Robertson"], cinematographers: ["Russ Alsobrook"],
     editors: ["William Kerr"], screenwriters: ["Seth Rogen", "Evan Goldberg"],
     runtime: 113, rtScore: 87
   },
   {
     rank: 100, title: "I Am Not Your Negro", year: 2016, 
     directors: ["Raoul Peck"], country: "USA/France/Belgium/Switzerland", genre: "Documentary",
     cast: ["Samuel L. Jackson", "James Baldwin"],
     producers: ["Rémi Grellety", "Raoul Peck", "Hébert Peck"],
     cinematographers: ["Henry Adebonojo", "Bill Ross IV"], editors: ["Alexandra Strauss"],
     screenwriters: ["Raoul Peck"], runtime: 93, rtScore: 98
   }
 ]);

 const [searchTerm, setSearchTerm] = useState('');
 const [sortBy, setSortBy] = useState('rank');
 const [sortOrder, setSortOrder] = useState('asc');
 const [selectedGenre, setSelectedGenre] = useState('');
 const [selectedYear, setSelectedYear] = useState('');
 const [selectedCountry, setSelectedCountry] = useState('');
 const [selectedDirector, setSelectedDirector] = useState('');
 const [selectedActor, setSelectedActor] = useState('');
 const [selectedProducer, setSelectedProducer] = useState('');
 const [selectedCinematographer, setSelectedCinematographer] = useState('');
 const [selectedEditor, setSelectedEditor] = useState('');
 const [selectedScreenwriter, setSelectedScreenwriter] = useState('');
 const [showFilters, setShowFilters] = useState(false);

 // Get unique values for filter dropdowns
 const genres = [...new Set(movies.map(movie => movie.genre))].sort();
 const years = [...new Set(movies.map(movie => movie.year))].sort((a, b) => b - a);
 const countries = [...new Set(movies.map(movie => movie.country))].sort();
 const directors = [...new Set(movies.flatMap(movie => movie.directors))].sort();
 const actors = [...new Set(movies.flatMap(movie => movie.cast))].sort();
 const producers = [...new Set(movies.flatMap(movie => movie.producers))].sort();
 const cinematographers = [...new Set(movies.flatMap(movie => movie.cinematographers))].sort();
 const editors = [...new Set(movies.flatMap(movie => movie.editors))].sort();
 const screenwriters = [...new Set(movies.flatMap(movie => movie.screenwriters))].sort();

 // Get all people from all roles for search
 const getAllPeople = (movie) => {
   return [
     ...movie.cast,
     ...movie.directors,
     ...movie.producers,
     ...movie.cinematographers,
     ...movie.editors,
     ...movie.screenwriters
   ];
 };

 // Filter and sort movies
 const filteredAndSortedMovies = useMemo(() => {
   let filtered = movies.filter(movie => {
     const matchesSearch = searchTerm === '' || 
       movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       getAllPeople(movie).some(person => 
         person.toLowerCase().includes(searchTerm.toLowerCase())
       ) ||
       movie.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
       movie.genre.toLowerCase().includes(searchTerm.toLowerCase());

     const matchesGenre = selectedGenre === '' || movie.genre === selectedGenre;
     const matchesYear = selectedYear === '' || movie.year.toString() === selectedYear;
     const matchesCountry = selectedCountry === '' || movie.country === selectedCountry;
     const matchesDirector = selectedDirector === '' || movie.directors.includes(selectedDirector);
     const matchesActor = selectedActor === '' || movie.cast.includes(selectedActor);
     const matchesProducer = selectedProducer === '' || movie.producers.includes(selectedProducer);
     const matchesCinematographer = selectedCinematographer === '' || movie.cinematographers.includes(selectedCinematographer);
     const matchesEditor = selectedEditor === '' || movie.editors.includes(selectedEditor);
     const matchesScreenwriter = selectedScreenwriter === '' || movie.screenwriters.includes(selectedScreenwriter);

     return matchesSearch && matchesGenre && matchesYear && matchesCountry && 
            matchesDirector && matchesActor && matchesProducer && matchesCinematographer && 
            matchesEditor && matchesScreenwriter;
   });

   // Sort the filtered results
   filtered.sort((a, b) => {
     let aValue, bValue;
     
     switch (sortBy) {
       case 'title':
         aValue = a.title.toLowerCase();
         bValue = b.title.toLowerCase();
         break;
       case 'year':
         aValue = a.year;
         bValue = b.year;
         break;
       case 'runtime':
         aValue = a.runtime;
         bValue = b.runtime;
         break;
       case 'rtScore':
         aValue = a.rtScore;
         bValue = b.rtScore;
         break;
       case 'rank':
       default:
         aValue = a.rank;
         bValue = b.rank;
         break;
     }

     if (sortOrder === 'asc') {
       return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
     } else {
       return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
     }
   });

   return filtered;
 }, [movies, searchTerm, sortBy, sortOrder, selectedGenre, selectedYear, selectedCountry, 
     selectedDirector, selectedActor, selectedProducer, selectedCinematographer, 
     selectedEditor, selectedScreenwriter]);

 const handleSort = (field) => {
   if (sortBy === field) {
     setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
   } else {
     setSortBy(field);
     setSortOrder('asc');
   }
 };

 const SortIcon = ({ field }) => {
   if (sortBy !== field) return <ChevronDown className="w-3 h-3 opacity-30" />;
   return sortOrder === 'asc' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />;
 };

 const clearFilters = () => {
   setSearchTerm('');
   setSelectedGenre('');
   setSelectedYear('');
   setSelectedCountry('');
   setSelectedDirector('');
   setSelectedActor('');
   setSelectedProducer('');
   setSelectedCinematographer('');
   setSelectedEditor('');
   setSelectedScreenwriter('');
   setSortBy('rank');
   setSortOrder('asc');
 };

 const downloadCSV = () => {
   const headers = [
     'Rank', 'Title', 'Year', 'Directors', 'Country', 'Genre', 'Cast', 
     'Producers', 'Cinematographers', 'Editors', 'Screenwriters', 
     'Runtime (min)', 'Rotten Tomatoes Score'
   ];
   
   const csvContent = [
     headers.join(','),
     ...filteredAndSortedMovies.map(movie => [
       movie.rank,
       `"${movie.title}"`,
       movie.year,
       `"${movie.directors.join('; ')}"`,
       `"${movie.country}"`,
       `"${movie.genre}"`,
       `"${movie.cast.join('; ')}"`,
       `"${movie.producers.join('; ')}"`,
       `"${movie.cinematographers.join('; ')}"`,
       `"${movie.editors.join('; ')}"`,
       `"${movie.screenwriters.join('; ')}"`,
       movie.runtime,
       movie.rtScore
     ].join(','))
   ].join('\n');

   const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
   const link = document.createElement('a');
   const url = URL.createObjectURL(blob);
   link.setAttribute('href', url);
   link.setAttribute('download', 'nyt-best-movies-21st-century.csv');
   link.style.visibility = 'hidden';
   document.body.appendChild(link);
   link.click();
   document.body.removeChild(link);
 };

 const getRTColor = (score) => {
   if (score >= 95) return 'text-green-600 bg-green-50';
   if (score >= 85) return 'text-green-500 bg-green-50';
   if (score >= 75) return 'text-yellow-600 bg-yellow-50';
   if (score >= 60) return 'text-orange-500 bg-orange-50';
   return 'text-red-500 bg-red-50';
 };

 return (
   <div className="max-w-7xl mx-auto p-6 bg-white min-h-screen">
     {/* Header */}
     <div className="mb-8">
       <div className="flex items-start justify-between mb-6">
         <div>
           <h1 className="text-4xl font-light text-gray-900 mb-2">
             NYT's 100 Best Movies of the 21st Century
           </h1>
           <p className="text-lg text-gray-600 font-light">
             Interactive database with sortable and filterable film data
           </p>
         </div>
         <div className="flex gap-3">
           <a 
             href="https://www.nytimes.com/interactive/2025/movies/best-movies-21st-century.html"
             target="_blank"
             rel="noopener noreferrer"
             className="flex items-center gap-2 px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm font-medium"
           >
             <ExternalLink className="w-4 h-4" />
             View Original Article
           </a>
           <button
             onClick={downloadCSV}
             className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors text-sm font-medium"
           >
             <Download className="w-4 h-4" />
             Download CSV
           </button>
         </div>
       </div>

       {/* Search */}
       <div className="relative mb-6">
         <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
         <input
           type="text"
           placeholder="Search movies, people, countries, genres..."
           value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)}
           className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent text-lg"
         />
       </div>

       {/* Quick Filters */}
       <div className="flex flex-wrap gap-3 mb-4">
         <select
           value={selectedGenre}
           onChange={(e) => setSelectedGenre(e.target.value)}
           className="px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-900 text-sm"
         >
           <option value="">All Genres</option>
           {genres.map(genre => (
             <option key={genre} value={genre}>{genre}</option>
           ))}
         </select>

         <select
           value={selectedYear}
           onChange={(e) => setSelectedYear(e.target.value)}
           className="px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-900 text-sm"
         >
           <option value="">All Years</option>
           {years.map(year => (
             <option key={year} value={year}>{year}</option>
           ))}
         </select>

         <select
           value={selectedCountry}
           onChange={(e) => setSelectedCountry(e.target.value)}
           className="px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-900 text-sm"
         >
           <option value="">All Countries</option>
           {countries.map(country => (
             <option key={country} value={country}>{country}</option>
           ))}
         </select>

         <button
           onClick={() => setShowFilters(!showFilters)}
           className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-md hover:bg-gray-50 text-sm font-medium"
         >
           <Filter className="w-4 h-4" />
           More Filters
           <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
         </button>
       </div>

       {/* Advanced Filters */}
       {showFilters && (
         <div className="bg-gray-50 rounded-md p-6 mb-4">
           <h3 className="text-sm font-medium text-gray-900 mb-4">Filter by People</h3>
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
             <div>
               <label className="block text-xs font-medium text-gray-700 mb-1">Director</label>
               <select
                 value={selectedDirector}
                 onChange={(e) => setSelectedDirector(e.target.value)}
                 className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-900 text-sm"
               >
                 <option value="">Any Director</option>
                 {directors.map(director => (
                   <option key={director} value={director}>{director}</option>
                 ))}
               </select>
             </div>

             <div>
               <label className="block text-xs font-medium text-gray-700 mb-1">Actor</label>
               <select
                 value={selectedActor}
                 onChange={(e) => setSelectedActor(e.target.value)}
                 className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-900 text-sm"
               >
                 <option value="">Any Actor</option>
                 {actors.map(actor => (
                   <option key={actor} value={actor}>{actor}</option>
                 ))}
               </select>
             </div>

             <div>
               <label className="block text-xs font-medium text-gray-700 mb-1">Producer</label>
               <select
                 value={selectedProducer}
                 onChange={(e) => setSelectedProducer(e.target.value)}
                 className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-900 text-sm"
               >
                 <option value="">Any Producer</option>
                 {producers.map(producer => (
                   <option key={producer} value={producer}>{producer}</option>
                 ))}
               </select>
             </div>

             <div>
               <label className="block text-xs font-medium text-gray-700 mb-1">Cinematographer</label>
               <select
                 value={selectedCinematographer}
                 onChange={(e) => setSelectedCinematographer(e.target.value)}
                 className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-900 text-sm"
               >
                 <option value="">Any Cinematographer</option>
                 {cinematographers.map(cinematographer => (
                   <option key={cinematographer} value={cinematographer}>{cinematographer}</option>
                 ))}
               </select>
             </div>

             <div>
               <label className="block text-xs font-medium text-gray-700 mb-1">Editor</label>
               <select
                 value={selectedEditor}
                 onChange={(e) => setSelectedEditor(e.target.value)}
                 className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-900 text-sm"
               >
                 <option value="">Any Editor</option>
                 {editors.map(editor => (
                   <option key={editor} value={editor}>{editor}</option>
                 ))}
               </select>
             </div>

             <div>
               <label className="block text-xs font-medium text-gray-700 mb-1">Screenwriter</label>
               <select
                 value={selectedScreenwriter}
                 onChange={(e) => setSelectedScreenwriter(e.target.value)}
                 className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-900 text-sm"
               >
                 <option value="">Any Screenwriter</option>
                 {screenwriters.map(screenwriter => (
                   <option key={screenwriter} value={screenwriter}>{screenwriter}</option>
                 ))}
               </select>
             </div>
           </div>
         </div>
       )}

       {/* Filter Status */}
       <div className="flex items-center justify-between text-sm">
         <span className="text-gray-500">
           Showing {filteredAndSortedMovies.length} of {movies.length} movies
         </span>
         {(searchTerm || selectedGenre || selectedYear || selectedCountry || selectedDirector || 
           selectedActor || selectedProducer || selectedCinematographer || selectedEditor || selectedScreenwriter) && (
           <button
             onClick={clearFilters}
             className="text-gray-700 hover:text-gray-900 font-medium"
           >
             Clear all filters
           </button>
         )}
       </div>
     </div>

     {/* Movies Table */}
     <div className="border border-gray-200 rounded-md overflow-hidden">
       <div className="overflow-x-auto">
         <table className="w-full">
           <thead className="bg-gray-50 border-b border-gray-200">
             <tr>
               <th 
                 className="px-6 py-4 text-left cursor-pointer hover:bg-gray-100 transition-colors"
                 onClick={() => handleSort('rank')}
               >
                 <div className="flex items-center gap-2 font-medium text-gray-900">
                   Rank
                   <SortIcon field="rank" />
                 </div>
               </th>
               <th 
                 className="px-6 py-4 text-left cursor-pointer hover:bg-gray-100 transition-colors"
                 onClick={() => handleSort('title')}
               >
                 <div className="flex items-center gap-2 font-medium text-gray-900">
                   Title
                   <SortIcon field="title" />
                 </div>
               </th>
               <th 
                 className="px-6 py-4 text-left cursor-pointer hover:bg-gray-100 transition-colors"
                 onClick={() => handleSort('year')}
               >
                 <div className="flex items-center gap-2 font-medium text-gray-900">
                   Year
                   <SortIcon field="year" />
                 </div>
               </th>
               <th 
                 className="px-6 py-4 text-left cursor-pointer hover:bg-gray-100 transition-colors"
                 onClick={() => handleSort('rtScore')}
               >
                 <div className="flex items-center gap-2 font-medium text-gray-900">
                   RT Score
                   <SortIcon field="rtScore" />
                 </div>
               </th>
               <th className="px-6 py-4 text-left font-medium text-gray-900">Director</th>
               <th className="px-6 py-4 text-left font-medium text-gray-900">Cast</th>
               <th className="px-6 py-4 text-left font-medium text-gray-900">Details</th>
             </tr>
           </thead>
           <tbody className="divide-y divide-gray-200">
             {filteredAndSortedMovies.map((movie, index) => (
               <tr key={movie.rank} className="hover:bg-gray-50 transition-colors">
                 <td className="px-6 py-4">
                   <span className="text-2xl font-light text-gray-900">#{movie.rank}</span>
                 </td>
                 <td className="px-6 py-4">
                   <div>
                     <h3 className="font-medium text-gray-900 mb-1">{movie.title}</h3>
                     <div className="flex items-center gap-2 text-sm text-gray-500">
                       <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                         {movie.genre}
                       </span>
                       <span>{movie.country}</span>
                     </div>
                   </div>
                 </td>
                 <td className="px-6 py-4">
                   <span className="text-gray-900">{movie.year}</span>
                 </td>
                 <td className="px-6 py-4">
                   <div className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${getRTColor(movie.rtScore)}`}>
                     🍅 {movie.rtScore}%
                   </div>
                 </td>
                 <td className="px-6 py-4">
                   <div className="text-sm text-gray-700">
                     {movie.directors.join(', ')}
                   </div>
                 </td>
                 <td className="px-6 py-4">
                   <div className="text-sm text-gray-600">
                     {movie.cast.slice(0, 2).join(', ')}
                     {movie.cast.length > 2 && (
                       <span className="text-gray-400"> +{movie.cast.length - 2} more</span>
                     )}
                   </div>
                 </td>
                 <td className="px-6 py-4">
                   <details className="text-sm">
                     <summary className="cursor-pointer text-gray-700 hover:text-gray-900 font-medium">
                       View Details
                     </summary>
                     <div className="mt-3 space-y-2 text-gray-600 bg-gray-50 p-3 rounded border-l-2 border-gray-200">
                       <div><strong>Runtime:</strong> {movie.runtime} min</div>
                       <div><strong>Producers:</strong> {movie.producers.join(', ')}</div>
                       <div><strong>Screenwriters:</strong> {movie.screenwriters.join(', ')}</div>
                       <div><strong>Cinematographer:</strong> {movie.cinematographers.join(', ')}</div>
                       <div><strong>Editor:</strong> {movie.editors.join(', ')}</div>
                       <div><strong>Full Cast:</strong> {movie.cast.join(', ')}</div>
                     </div>
                   </details>
                 </td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
     </div>

     {filteredAndSortedMovies.length === 0 && (
       <div className="text-center py-16">
         <Video className="w-16 h-16 text-gray-300 mx-auto mb-4" />
         <h3 className="text-xl font-light text-gray-900 mb-2">No movies found</h3>
         <p className="text-gray-500">Try adjusting your search terms or filters</p>
       </div>
     )}
   </div>
 );
};

export default MovieDatabase;