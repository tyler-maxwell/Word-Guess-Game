var currentPhil = 0;
var score;
var gameOver = true;

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
                        name: "Laozi (Lao-tzu)",
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
                        name: "Nietzsche",
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
                    }
];

function displayInfo() {
    // Diplay Image
    $("#image").attr("src", philosophers[currentPhil].image);
    
    // Display Name
    var nameP = $("<p>");
    nameP.text(philosophers[currentPhil].name);
    $("#name").append(nameP);

    // Display Birth Info
    var birthPlP = $("<p>");
    birthPlP.text(philosophers[currentPhil].birthplace);
    $("#birth").append(birthPlP);
    var birthP = $("<p>");
    birthP.text(philosophers[currentPhil].birth);
    $("#birth").append(birthP);

    // Display Death Info
    var deathPlP = $("<p>");
    deathPlP.text(philosophers[currentPhil].deathplace);
    $("#death").append(deathPlP);
    var deathP = $("<p>");
    deathP.text(philosophers[currentPhil].death);
    $("#death").append(deathP);

    // Display Notable Works
    for (i = 0; i < philosophers[currentPhil].works.length; i++) {
        var workLi = $("<li>");
        workLi.text(philosophers[currentPhil].works[i]);
        $("#works").append(workLi);
    }

    // Display Biography
    for (i = 0; i < philosophers[currentPhil].bio.length; i++) {
        var workP = $("<p>");
        workP.text(philosophers[currentPhil].bio[i]);
        $("#bio").append(workP);
    }
    var sourceP = $("<a>");
    sourceP.attr("href", philosophers[currentPhil].source)
    sourceP.text("Biography provided by IEP");
    $("#bio").append(sourceP);
};

document.onkeyup = function(event) {
    if (gameOver == true) {
        currentPhil = Math.floor(Math.random() * philosophers.length)
        gameOver = false;
    }
    else if (gameOver == false) {

    }
}
