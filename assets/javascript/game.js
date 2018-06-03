// global variables
var currentPhil = 0;
var philName = "";
var guessNumb = 6;
var guesses = [];
var score = 0;
var losses = 0;
var gameOver = true;
var winSound = document.getElementById("winSound"); 
var loseSound = document.getElementById("loseSound"); 

// array of philosopher objects
var philosophers = [{
                        name: "Plato",
                        image: "assets/images/plato.jpg",
                        birth: "428/427 or 424/423 BC",
                        birthplace: "Athens, Greece",
                        death: "348/347 BC (age c. 80)",
                        deathplace: "Athens, Greece",
                        works: ["Apology", "Phaedo", "Symposium", "Republic"],
                        bio: ["Plato is one of the world's best known and most widely read and studied philosophers. He was the student of Socrates and the teacher of Aristotle, and he wrote in the middle of the fourth century B.C.E. in ancient Greece. Though influenced primarily by Socrates, to the extent that Socrates is usually the main character in many of Plato's writings, he was also influenced by Heraclitus, Parmenides, and the Pythagoreans.",
                              "There are varying degrees of controversy over which of Plato's works are authentic, and in what order they were written, due to their antiquity and the manner of their preservation through time. Nonetheless, his earliest works are generally regarded as the most reliable of the ancient sources on Socrates, and the character Socrates that we know through these writings is considered to be one of the greatest of the ancient philosophers.",
                              "Plato's middle to later works, including his most famous work, the Republic, are generally regarded as providing Plato's own philosophy, where the main character in effect speaks for Plato himself. These works blend ethics, political philosophy, moral psychology, epistemology, and metaphysics into an interconnected and systematic philosophy. It is most of all from Plato that we get the theory of Forms, according to which the world we know through the senses is only an imitation of the pure, eternal, and unchanging world of the Forms. Plato's works also contain the origins of the familiar complaint that the arts work by inflaming the passions, and are mere illusions. We also are introduced to the ideal of \"Platonic love:\" Plato saw love as motivated by a longing for the highest Form of beauty—The Beautiful Itself, and love as the motivational power through which the highest of achievements are possible. Because they tended to distract us into accepting less than our highest potentials, however, Plato mistrusted and generally advised against physical expressions of love."],
                        source: "https://www.iep.utm.edu/plato/"
                    },
                    {
                        name: "Aristotle",
                        image: "assets/images/aristotle.jpg",
                        birth: "384 BC",
                        birthplace: "Stagira, Chalkidiki, Chalcidian League, Northern Greece",
                        death: "322 BC (aged approx. 62)",
                        deathplace: "Euboea, Greece, Macedonian Empire",
                        works: ["Nicomachean Ethics", "On the Soul", "Metaphysics", "Rhetoric"],
                        bio: ["Aristotle is a towering figure in ancient Greek philosophy, making contributions to logic, metaphysics, mathematics, physics, biology, botany, ethics, politics, agriculture, medicine, dance and theatre. He was a student of Plato who in turn studied under Socrates. He was more empirically-minded than Plato or Socrates and is famous for rejecting Plato's theory of forms.",
                              "As a prolific writer and polymath, Aristotle radically transformed most, if not all, areas of knowledge he touched. It is no wonder that Aquinas referred to him simply as \"The Philosopher.\" In his lifetime, Aristotle wrote as many as 200 treatises, of which only 31 survive. Unfortunately for us, these works are in the form of lecture notes and draft manuscripts never intended for general readership, so they do not demonstrate his reputed polished prose style which attracted many great followers, including the Roman Cicero. Aristotle was the first to classify areas of human knowledge into distinct disciplines such as mathematics, biology, and ethics. Some of these classifications are still used today.",
                              "As the father of the field of logic, he was the first to develop a formalized system for reasoning. Aristotle observed that the validity of any argument can be determined by its structure rather than its content. A classic example of a valid argument is his syllogism: All men are mortal; Socrates is a man; therefore, Socrates is mortal. Given the structure of this argument, as long as the premises are true, then the conclusion is also guaranteed to be true. Aristotle’s brand of logic dominated this area of thought until the rise of modern propositional logic and predicate logic 2000 years later.",
                              "Aristotle’s emphasis on good reasoning combined with his belief in the scientific method forms the backdrop for most of his work. For example, in his work in ethics and politics, Aristotle identifies the highest good with intellectual virtue; that is, a moral person is one who cultivates certain virtues based on reasoning. And in his work on psychology and the soul, Aristotle distinguishes sense perception from reason, which unifies and interprets the sense perceptions and is the source of all knowledge.",
                              "Aristotle famously rejected Plato’s theory of forms, which states that properties such as beauty are abstract universal entities that exist independent of the objects themselves. Instead, he argued that forms are intrinsic to the objects and cannot exist apart from them, and so must be studied in relation to them. However, in discussing art, Aristotle seems to reject this, and instead argues for idealized universal form which artists attempt to capture in their work."],
                        source: "https://www.iep.utm.edu/aristotl/"
                    },
                    {
                        name: "Laozi",
                        image: "assets/images/laozi.jpg",
                        birth: "unknown (likely 6th or 4th century BC)",
                        birthplace: "Zhou Kingdom",
                        death: "unknown (likely 6th or 4th century BC)",
                        deathplace: "Zhou Kingdom",
                        works: ["Daodejing"],
                        bio: ["Laozi is the name of a legendary Daoist philosopher, the alternate title of the early Chinese text better known in the West as the Daodejing, and the moniker of a deity in the pantheon of organized “religious Daoism” that arose during the later Han dynasty (25-220 C.E.). Laozi is the pinyin romanization for the Chinese characters which mean \"Old Master.\" Laozi is also known as Lao Dan (\"Old Dan\") in early Chinese sources (see Romanization systems for Chinese terms).", 
                              "The Zhuangzi (late 4th century B.C.E.) is the first text to use Laozi as a personal name and to identify Laozi and Lao Dan. The earliest materials to mention Laozi are in the Zhuangzi’s Inner Chapters (Chs. 1-7) in the narration of Lao Dan’s funeral in Ch. 3. Two other passages provide support for the linkage of Laozi and Lao Dan (in Ch. 14 and Ch. 27). There are seventeen passages in which Laozi plays a role in the Zhuangzi. Three are in the Inner Chapters, eight occur in chapters 11-14 in the Yellow Emperor sections of the text (chs. 11, 12, 13, 14), five are in chapters likely belonging to Zhuang Zhou’s disciples as the sources (chs. 21, 22, 23, 25, 27), and one is in the final concluding editorial chapter (ch. 33).", 
                              "In the Yellow Emperor sections in which Laozi is the main figure, four passages contain direct attacks on Confucius and the Confucian virtues of ren, yi, and li in the form of dialogues. The sentiments expressed by Laozi in this passages are reminiscent of remarks from the Daodejing and probably date from the period in which that collection was reaching some near final form.  Some of these themes include the advocacy of wu-wei, rejection of discursive reasoning and mind meddling, condemnation of making discriminations, and valorization of forgetting and fasting of the mind. The earliest ascriptions of authorship of the Daodejing to Laozi are in Han Feizi and the Huainanzi.  Over time, Laozi became a principal figure in institutionalized forms of Daoism and he was often associated with the many transformations and incarnations of the dao itself."],
                        source: "https://www.iep.utm.edu/laozi/"
                    },
                    {
                        name: "Confucius",
                        image: "assets/images/confucius.png",
                        birth: "551 BC",
                        birthplace: "Zou, Lu, Zhou Kingdom",
                        death: "479 BC (aged 71–72)",
                        deathplace: "Lu, Zhou Kingdom",
                        works: ["The Analects"],
                        bio: ["Better known in China as \"Master Kong\" (Chinese: Kongzi), Confucius was a fifth-century BCE Chinese thinker whose influence upon East Asian intellectual and social history is immeasurable. As a culturally symbolic figure, he has been alternately idealized, deified, dismissed, vilified, and rehabilitated over the millennia by both Asian and non-Asian thinkers and regimes. Given his extraordinary impact on Chinese, Korean, Japanese, and Vietnamese thought, it is ironic that so little can be known about Confucius. The tradition that bears his name - \"Confucianism\" (Chinese: Rujia) - ultimately traces itself to the sayings and biographical fragments recorded in the text known as the Analects (Chinese: Lunyu).",
                              "As with the person of Confucius himself, scholars disagree about the origins and character of the Analects, but it remains the traditional source for information about Confucius' life and teaching. Most scholars remain confident that it is possible to extract from the Analects several philosophical themes and views that may be safely attributed to this ancient Chinese sage. These are primarily ethical, rather than analytical-logical or metaphysical in nature, and include Confucius' claim that Tian (\"Heaven\") is aligned with moral order but dependent upon human agents to actualize its will; his concern for li (ritual propriety) as the instrument through which the family, the state, and the world may be aligned with Tian's moral order; and his belief in the \"contagious\" nature of moral force (de), by which moral rulers diffuse morality to their subjects, moral parents raise moral children, and so forth."],
                        source: "https://www.iep.utm.edu/confuciu/"
                    },
                    {
                        name: "Dogen",
                        image: "assets/images/dogen.jpg",
                        birth: "January 19, 1200",
                        birthplace: "Kyoto, Japan",
                        death: "September 22, 1253 (aged 53)",
                        deathplace: "Kyoto, Japan",
                        works: ["Shobogenzo"],
                        bio: ["Dōgen Zenji was a Japanese Buddhist priest, writer, poet, philosopher, and founder of the Sōtō school of Zen in Japan.",
                              "Originally ordained as a monk in the Tendai School in Kyoto, he was ultimately dissatisfied with its teaching and traveled to China to seek out what he believed to be a more authentic Buddhism. He remained there for five years, finally training under Tiantong Rujing, an eminent teacher of the Chinese Caodong lineage. Upon his return to Japan, he began promoting the practice of zazen (sitting meditation) through literary works such as Fukan zazengi and Bendōwa.",
                              "He eventually broke relations completely with the powerful Tendai School, and, after several years of likely friction between himself and the establishment, left Kyoto for the mountainous countryside where he founded the monastery Eihei-ji, which remains the head temple of the Sōtō school today.",
                              "Dōgen is known for his extensive writing including his most famous work, the collection of 95 essays called the Shōbōgenzō, but also Eihei Kōroku, a collection of his talks, poetry, and commentaries, and Eihei Shingi, the first Zen monastic code written in Japan, among others."],
                        source: "https://en.wikipedia.org/wiki/D%C5%8Dgen"
                    },
                    {
                        name: "Friedrich Nietzsche",
                        image: "assets/images/nietzsche.jpg",
                        birth: "October 15, 1844",
                        birthplace: "Röcken, Saxony, Kingdom of Prussia, German Confederation",
                        death: "August 25, 1900 (aged 55)",
                        deathplace: "Weimar, Saxe-Weimar-Eisenach, German Empire",
                        works: ["Thus Spoke Zarathustra", "On the Genealogy of Morals", "The Gay Science", "Beyond Good and Evil"],
                        bio: ["Nietzsche was a German philosopher, essayist, and cultural critic. His writings on truth, morality, language, aesthetics, cultural theory, history, nihilism, power, consciousness, and the meaning of existence have exerted an enormous influence on Western philosophy and intellectual history.",
                              "Nietzsche spoke of \"the death of God,\" and foresaw the dissolution of traditional religion and metaphysics. Some interpreters of Nietzsche believe he embraced nihilism, rejected philosophical reasoning, and promoted a literary exploration of the human condition, while not being concerned with gaining truth and knowledge in the traditional sense of those terms. However, other interpreters of Nietzsche say that in attempting to counteract the predicted rise of nihilism, he was engaged in a positive program to reaffirm life, and so he called for a radical, naturalistic rethinking of the nature of human existence, knowledge, and morality. On either interpretation, it is agreed that he suggested a plan for “becoming what one is” through the cultivation of instincts and various cognitive faculties, a plan that requires constant struggle with one’s psychological and intellectual inheritances.",
                              "Nietzsche claimed the exemplary human being must craft his/her own identity through self-realization and do so without relying on anything transcending that life—such as God or a soul.  This way of living should be affirmed even were one to adopt, most problematically, a radical vision of eternity, one suggesting the \"eternal recurrence\" of all events. According to some commentators, Nietzsche advanced a cosmological theory of “will to power.” But others interpret him as not being overly concerned with working out a general cosmology. Questions regarding the coherence of Nietzsche's views--questions such as whether these views could all be taken together without contradiction, whether readers should discredit any particular view if proven incoherent or incompatible with others, and the like--continue to draw the attention of contemporary intellectual historians and philosophers."],
                        source: "https://www.iep.utm.edu/nietzsch/"
                    },
                    {
                        name: "Slavoj Zizek",
                        image: "assets/images/zizek.jpg",
                        birth: "March 21, 1949",
                        birthplace: "Ljubljana, Slovenia, Yugoslavia",
                        death: "still alive (age 69)",
                        deathplace: "",
                        works: ["The Sublime Object of Ideology", "Welcome to the Desert of the Real", "The Parallax View", "Living in the End Times", "The Ticklish Subject"],
                        bio: ["Slavoj Žižek is a Slovenian-born political philosopher and cultural critic. He was described by British literary theorist, Terry Eagleton, as the “most formidably brilliant” recent theorist to have emerged from Continental Europe.",
                              "Žižek’s work is infamously idiosyncratic. It features striking dialectical reversals of received common sense; a ubiquitous sense of humor; a patented disrespect towards the modern distinction between high and low culture; and the examination of examples taken from the most diverse cultural and political fields. Yet Žižek’s work, as he warns us, has a very serious philosophical content and intention. He challenges many of the founding assumptions of today’s left-liberal academy, including the elevation of difference or otherness to ends in themselves, the reading of the Western Enlightenment as implicitly totalitarian, and the pervasive skepticism towards any context-transcendent notions of truth or the good.",
                              "One feature of Žižek’s work is its singular philosophical and political reconsideration of German idealism (Kant, Schelling and Hegel). Žižek has also reinvigorated the challenging psychoanalytic theory of Jacques Lacan, controversially reading him as a thinker who carries forward founding modernist commitments to the Cartesian subject and the liberating potential of self-reflective agency, if not self-transparency. Žižek’s works since 1997 have become more and more explicitly political, contesting the widespread consensus that we live in a post-ideological or post-political world, and defending the possibility of lasting changes to the new world order of globalization, the end of history, or the war on terror.",],
                        source: "https://www.iep.utm.edu/zizek/"
                    },
                    {
                        name: "Edmund Husserl",
                        image: "assets/images/husserl.jpg",
                        birth: "April 8, 1859",
                        birthplace: "Proßnitz, Margraviate of Moravia, Austrian Empire",
                        death: "April 27, 1938 (aged 79)",
                        deathplace: "Freiburg, Germany",
                        works: ["Phenomenology and the Crisis of Philosophy", "The Crisis of European Sciences and Transcendental Phenomenology", "Cartesian Meditations"],
                        bio: ["Although not the first to coin the term, it is uncontroversial to suggest that the German philosopher, Edmund Husserl (1859-1938), is the \"father\" of the philosophical movement known as phenomenology.  Phenomenology can be roughly described as the sustained attempt to describe experiences (and the \"things themselves\") without metaphysical and theoretical speculations. Husserl suggested that only by suspending or bracketing away the \"natural attitude\" could philosophy becomes its own distinctive and rigorous science, and he insisted that phenomenology is a science of consciousness rather than of empirical things. Indeed, in Husserl’s hands phenomenology began as a critique of both psychologism and naturalism.  Naturalism is the thesis that everything belongs to the world of nature and can be studied by the methods appropriate to studying that world (that is, the methods of the hard sciences). Husserl argued that the study of consciousness must actually be very different from the study of nature. For him, phenomenology does not proceed from the collection of large amounts of data and to a general theory beyond the data itself, as in the scientific method of induction. Rather, it aims to look at particular examples without theoretical presuppositions (such as the phenomena of intentionality, of love, of two hands touching each other, and so forth), before then discerning what is essential and necessary to these experiences. Although all of the key, subsequent phenomenologists (Heidegger, Sartre, Merleau-Ponty, Gadamer, Levinas, Derrida) have contested aspects of Husserl’s characterization of phenomenology, they have nonetheless been heavily indebted to him. As such, he is arguably one of the most important and influential philosophers of the twentieth century."],
                        source: "https://www.iep.utm.edu/husserl/"
                    },
                    {
                        name: "Soren Kierkegaard",
                        image: "assets/images/kierkegaard.jpg",
                        birth: "May 5, 1813",
                        birthplace: "Copenhagen, Denmark–Norway",
                        death: "November 11, 1855 (aged 42)",
                        deathplace: "Copenhagen, Denmark",
                        works: ["Fear and Trembling", "Either-Or", "Repetition"],
                        bio: ["Søren Kierkegaard is an outsider in the history of philosophy. His peculiar authorship comprises a baffling array of different narrative points of view and disciplinary subject matter, including aesthetic novels, works of psychology and Christian dogmatics, satirical prefaces, philosophical \"scraps\" and \"postscripts,\" literary reviews, edifying discourses, Christian polemics, and retrospective self-interpretations. His arsenal of rhetoric includes irony, satire, parody, humor, polemic and a dialectical method of \"indirect communication\" - all designed to deepen the reader’s subjective passionate engagement with ultimate existential issues. Like his role models Socrates and Christ, Kierkegaard takes how one lives one’s life to be the prime criterion of being in the truth. Kierkegaard’s closest literary and philosophical models are Plato, J.G. Hamann, G.E. Lessing, and his teacher of philosophy at the University of Copenhagen Poul Martin Møller, although Goethe, the German Romantics, Hegel, Kant and the logic of Adolf Trendelenburg are also important influences. His prime theological influence is Martin Luther, although his reactions to his Danish contemporaries N.F.S. Grundtvig and H.L. Martensen are also crucial. In addition to being dubbed \"the father of existentialism,\" Kierkegaard is best known as a trenchant critic of Hegel and Hegelianism and for his invention or elaboration of a host of philosophical, psychological, literary and theological categories, including: anxiety, despair, melancholy, repetition, inwardness, irony, existential stages, inherited sin, teleological suspension of the ethical, Christian paradox, the absurd, reduplication, universal/exception, sacrifice, love as a duty, seduction, the demonic, and indirect communication."],
                        source: "https://www.iep.utm.edu/kierkega/"
                    },
                    {
                        name: "Maurice Merleau-Ponty",
                        image: "assets/images/merleau-ponty.jpg",
                        birth: "March 14, 1908",
                        birthplace: "Rochefort-sur-Mer, Charente-Maritime, France",
                        death: "May 3, 1961 (aged 53",
                        deathplace: "Paris, France",
                        works: ["The Primacy of Perception", "Phenomenology of Perception", "The Visible and the Invisible"],
                        bio: ["Maurice Merleau-Ponty’s work is commonly associated with the philosophical movement called existentialism and its intention to begin with an analysis of the concrete experiences, perceptions, and difficulties, of human existence. However, he never propounded quite the same extreme accounts of radical freedom, being-towards-death, anguished responsibility, and conflicting relations with others, for which existentialism became both famous and notorious in the 1940s and 1950s. Perhaps because of this, he did not initially receive the same amount of attention as his French contemporaries and friends, Jean-Paul Sartre and Simone de Beauvoir. These days though, his phenomenological analyses are arguably being given more attention than either, in both France and in the Anglo-American context, because they retain an ongoing relevance in fields as diverse as cognitive science, medical ethics, ecology, sociology and psychology. Although it is difficult to summarize Merleau-Ponty’s work into neat propositions, we can say that he sought to develop a radical re-description of embodied experience (with a primacy given to studies of perception), and argued that these phenomena could not be suitably understood by the philosophical tradition because of its tendency to drift between two flawed and equally unsatisfactory alternatives: empiricism and, what he called, intellectualism. This article will seek to explain his understanding of perception, bodily movement, habit, ambiguity, and relations with others, as they were expressed in his key early work, Phenomenology of Perception, before exploring the enigmatic ontology of the chiasm and the flesh that is so evocatively described in his unfinished book, The Visible and the Invisible."],
                        source: "https://www.iep.utm.edu/merleau/"
                    }
];

// displays the information contained within current philosopher object
function displayInfo() {
    // diplay image
    $("#image").attr("src", philosophers[currentPhil].image);
    
    // display name
    var nameP = $("<p>");
    nameP.text(philosophers[currentPhil].name);
    nameP.attr("class", "dynamic");
    $("#name").append(nameP);

    // display birth info
    var birthPlP = $("<p>");
    birthPlP.text(philosophers[currentPhil].birthplace);
    birthPlP.attr("class", "dynamic");
    $("#birth").append(birthPlP);
    var birthP = $("<p>");
    birthP.text(philosophers[currentPhil].birth);
    birthP.attr("class", "dynamic");
    $("#birth").append(birthP);

    // display death info
    var deathPlP = $("<p>");
    deathPlP.text(philosophers[currentPhil].deathplace);
    deathPlP.attr("class", "dynamic");
    $("#death").append(deathPlP);
    var deathP = $("<p>");
    deathP.text(philosophers[currentPhil].death);
    deathP.attr("class", "dynamic");
    $("#death").append(deathP);

    // display notable works
    for (i = 0; i < philosophers[currentPhil].works.length; i++) {
        var workLi = $("<li>");
        workLi.text(philosophers[currentPhil].works[i]);
        workLi.attr("type", "disc");
        workLi.attr("class", "dynamic");
        $("#works").append(workLi);
    }

    // display biography
    for (i = 0; i < philosophers[currentPhil].bio.length; i++) {
        var workP = $("<p>");
        workP.text(philosophers[currentPhil].bio[i]);
        workP.attr("class", "dynamic");
        $("#bio").append(workP);
    }
    var sourceP = $("<a>");
    sourceP.attr("href", philosophers[currentPhil].source)
    sourceP.attr("class", "dynamic");
    sourceP.text("Biography provided by this source");
    $("#bio").append(sourceP);
};

// replaces character at index in string 
function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
}

// main game logic
document.onkeyup = function(event) {
    // resets the game
    if (gameOver == true) {
        // check if key pressed is a letter
        if (event.key == "a" || event.key == "b" || event.key == "c" || event.key == "d" || event.key == "e" || 
            event.key == "f" || event.key == "g" || event.key == "h" || event.key == "i" || event.key == "j" || 
            event.key == "k" || event.key == "l" || event.key == "m" || event.key == "n" || event.key == "o" || 
            event.key == "p" || event.key == "q" || event.key == "r" || event.key == "s" || event.key == "t" || 
            event.key == "u" || event.key == "v" || event.key == "w" || event.key == "x" || event.key == "y" || event.key == "z") {
            
            currentPhil = Math.floor(Math.random() * philosophers.length)
            philName = "";
            guessNumb = 6;
            guesses = [];
            // generates a string with _ in place of letters for word to guess
            for (i = 0; i < philosophers[currentPhil].name.length; i++) {
                if (philosophers[currentPhil].name[i] == " ") {
                    philName += " ";
                }
                else if (philosophers[currentPhil].name[i] == "-") {
                    philName += "-";
                }
                else {
                    philName += "_";
                }
            }
            $("#image").attr("src", "assets/images/unknown-person.gif");
            $(".dynamic").remove();
            $("#currentWord").text(philName);
            $("#guessNumb").text(guessNumb);
            $("#guesses").text("None");
            gameOver = false;
        }
    }

    // game in progress
    else if (gameOver == false) {
        // check is key pressed is a letter
        if (event.key == "a" || event.key == "b" || event.key == "c" || event.key == "d" || event.key == "e" || 
            event.key == "f" || event.key == "g" || event.key == "h" || event.key == "i" || event.key == "j" || 
            event.key == "k" || event.key == "l" || event.key == "m" || event.key == "n" || event.key == "o" || 
            event.key == "p" || event.key == "q" || event.key == "r" || event.key == "s" || event.key == "t" || 
            event.key == "u" || event.key == "v" || event.key == "w" || event.key == "x" || event.key == "y" || event.key == "z") {
            
            var guess = false;
            var previousGuess = false;
            // check is key pressed matches a letter in philosopher's name
            for (i = 0; i < philosophers[currentPhil].name.length; i ++) {
                if (event.key == philosophers[currentPhil].name[i].toLowerCase()) {
                    philName = replaceAt(philName, i, event.key);
                    $("#currentWord").text(philName);
                    guess = true;
                }
            }
            // checks for previous wrong guesses
            for (i = 0; i < guesses.length; i++) {
                if (event.key == guesses[i]) {
                    previousGuess = true;
                }
            }
            // fires when a new wrong guess is entered
            if (guess == false && previousGuess == false) {
                guessNumb--;
                $("#guessNumb").text(guessNumb);
                guesses.push(event.key);
                $("#guesses").text(guesses);
            }

            guess = false;
            previousGuess = false;
        }

        // check if game was lost
        if (guessNumb == 0) {
            displayInfo();
            losses++;
            $("#losses").text(losses);
            gameOver = true;
            loseSound.play();
        }

        // check if game was won
        if (philName == philosophers[currentPhil].name.toLowerCase()) {
            displayInfo();
            score++;
            $("#wins").text(score);
            gameOver = true;
            winSound.play(); 
        }
    }
}
