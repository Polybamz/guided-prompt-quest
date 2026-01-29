import { Module } from "@/types/learning";

export const modules: Module[] = [
 {
  id: "fundamentals-of-prompting",
  title: "Fundamentals of Prompting",
  description:
    "Learn what prompts are, why prompt engineering matters, and how in-context learning enables models to perform tasks without retraining.",
  estimatedTime: 20,
  isPremium: false,

  content: `
## Fundamentals of Prompting

### What Is a Prompt?
A **prompt** is the input given to a Large Language Model (LLM) to generate a response.  
It can be a question, instruction, or structured text that guides the model’s output.

From an engineering perspective, prompts act as **soft programs**. Instead of writing deterministic code, we guide a probabilistic system by carefully crafting instructions and context.

---

### What Is Prompt Engineering?
**Prompt engineering** is the practice of designing prompts that effectively leverage the knowledge already inside a model.

Unlike traditional programming:
- There is no direct control flow
- The model is a black box
- We iteratively refine inputs based on observed outputs

The goal is to **guide behavior**, not to hard-code logic.

---

### Why Prompt Engineering Matters
LLMs are trained to continue text plausibly—not to understand intent perfectly.

- Poor prompts → irrelevant, inconsistent, or incorrect outputs
- Well-designed prompts → strong performance, even from smaller models

Prompt engineering is often the **fastest and cheapest way** to adapt an LLM:
- No retraining required
- No model weight updates
- Easy to iterate and deploy

However, it’s not a silver bullet. Complex systems may require:
- Retrieval pipelines
- Fine-tuning
- External tools or data

---

### In-Context Learning
**In-context learning** allows models to learn tasks directly from examples inside the prompt.

- **Zero-shot prompting**: Only instructions, no examples
- **Few-shot prompting**: A small number of examples (e.g., 3-shot, 5-shot)

By seeing examples, the model infers patterns and applies them to new inputs.

Research (e.g., *“Language Models are Few-Shot Learners”*) showed this capability clearly in GPT-3.

---

### Practical Considerations
- Few-shot examples often improve accuracy
- Newer models may perform well with clear zero-shot instructions
- More examples increase cost and latency

**Best practice:** Experiment to find the balance between clarity, performance, and prompt length.

---

### Key Takeaway
Prompts provide both **instructions** and **context**.  
They can include task descriptions, relevant information, and examples—making them the foundation of effective LLM applications.
`,

  quiz: {
    questions: [
      {
        id: "q1",
        question: "From an engineering perspective, what is a prompt best described as?",
        options: [
          "A dataset used to retrain the model",
          "A soft program that guides model behavior",
          "A deterministic algorithm",
          "A model weight update"
        ],
        correctAnswer: 1,
        explanation:
          "Prompts act as soft programs, guiding the probabilistic behavior of the model without changing its weights."
      },
      {
        id: "q2",
        question: "Why is prompt engineering often preferred over retraining a model?",
        options: [
          "It permanently improves the model",
          "It requires access to model internals",
          "It is faster and requires no weight updates",
          "It removes probabilistic behavior"
        ],
        correctAnswer: 2,
        explanation:
          "Prompt engineering adapts model behavior quickly without retraining or modifying model weights."
      },
      {
        id: "q3",
        question: "What is few-shot prompting?",
        options: [
          "Prompting with no instructions",
          "Prompting with many training epochs",
          "Prompting with a few examples in the input",
          "Prompting that updates model parameters"
        ],
        correctAnswer: 2,
        explanation:
          "Few-shot prompting includes a small number of examples to help the model infer the task pattern."
      }
    ]
  }
},


//   {
//     id: "module-0",
//     title: "Prompt engineering and Context engineering",
//     description:'Prompt engineering focuses on how we design the textual inputs (prompt) to guid LLM`s behave , while context engineering is about managing the entire infomstion flow , structuring the surriounding data,tools and environment that feeds the model. ',
//     estimatedTime: 30,
//     videoUrl:'',
//     content: `# Fundamentals Of Prompting

// A prompt is the input given to LLM's to row out a response , it can be a question, instruction, or any text the model completes or reponds to.

// From an engineering perspective, a prompt is not just casual text; it is a piece of logic to proggram the model's behavior (often called "soft programming").
// In essence. prompt engineering means writing instruction that effectively leverage the knowledge already present in the model. Unlike traditional software where we write deterministic code, prompting is more of an interactive probability programing: we guide a black-box model with  instructions, then observe how it behaves, and refine our approach.

// ### Why Promp Engineering is Needed 

// LLM's are trained to continue text in in a plausible way but to get the specific output we want,  we nust craft the input skillfully. A poorly designed prompt can lead to irrelevant, inconcsistent or incurrect outputs, even from a very capable model.
// On the other hand , a well design prompt can make even a weaker model perform surprisingly well on a given task. Prompt engineering has therefore become "the skill designing prompts guides a generative AI model toward the kind of response you actually want"
// Importantly , prompt engineering if often the most accessible way to adapt an LLM to your needs without model retrainig. It requires no updates to the model's weeight , instead you leverage the model's already present knowledge by providing instructions and context.
// his make prompt engineering fast to iterate on and deploy , which is why many LLM applications rellied solely on prompting . However, it's not silver bullet, more complex task often require going beyond skillfull prompting to exploring a broader context pipeline fine-tuning , or additional data.

// ### In-context learning

// Promt is closely tied to the concept of **In-context Learning**. Researchers discovered the with GPT-3 that  large models can learn tasks from examples given in the prompt itself, without any parameter updates. 

// or instance, if you prompt the model with a few example question-answer pairs (few-shot prompting), the model can infer the pattern and apply it to a new question. If you provide no examples, expecting the model to solve the task from just instructions, that’s zero-shot prompting.


// Few-shot prompting (sometimes called few-shot in-context learning) often improves accuracy by showing the model what format or style of answer is expected. For example, adding 5 examples makes it a “5-shot” prompt. GPT-3’s paper “Language Models are Few-Shot Learners” highlighted this ability.

// However, there are diminishing returns with newer advanced models: experiments have shown GPT-4 sometimes doesn’t gain much from few-shot examples on certain tasks compared to zero-shot. This is likely because newer models are better at following instructions out-of-the-box, so a clear zero-shot instruction often suffices for them.

// But in niche domains, a few examples can still boost performance significantly if the model’s training data lacked those patterns. In practice, you should experiment to find the optimal number of examples for your task: balancing performance versus the added prompt length (which increases cost and latency).


// In summary, the fundamental idea is that prompts provide both instructions and context to the model. They can include a description of the task, relevant information or data, and examples of the task being performed.

//     `,
//     quiz:  {
//       questions:[
//          {
//           id: "q1",
//           question: "What is the primary function of a language model?",
//           options: [
//             "To store large amounts of text data",
//             "To understand and generate natural human language", 
//             "To replace human writers completely",
//             "To translate only between programming languages"
//           ],
//           correctAnswer: 1,
//           explanation: "Language models are AI systems trained to understand and generate natural human language by learning linguistic patterns from text data."
//         },
//       ],
      
//     }
//   },
//   {
//     id: "module-1",
//     title: "Introduction to Language Models",
//     description: "Understanding the fundamentals of AI language models and their influence on modern technology.",
//     estimatedTime: 25,
//     videoUrl: "https://www.youtube.com/embed/aircAruvnKk",
//     content: `# Introduction to Language Models

// Now that you appreciate the huge influence prompts have over AI systems from the previous topic, it's time to look underneath the hood and demystify how these models actually work. Understanding the fundamentals of language models will make you a better prompt engineer.

// ## What is a Language Model?

// In simple terms, a language model is an AI system trained to understand and generate natural human language. It learns linguistic patterns from vast datasets of texts so it can complete sentences, answer questions, translate between languages, and more. Language models power applications like search engines, chatbots, and even creative writing aids.

// These models are key for natural language processing - allowing computers to parse, interpret, and manipulate real human language effectively just as humans do. For perspective, language modelling took a great leap forward in 2020 when GPT-3 demonstrated unprecedented mastery of language simply through "reading" millions of digitised books and online writings!

// ## Key Components

// Language models contain different key components:
// - **Encoder**: Tokenises input text into numerical representations
// - **Decoder**: Generates tokenisations back into readable text  
// - **Attention Mechanism**: Learns contextual relationships between tokens

// We will explore details of architectures like transformers and RNNs later.

// ## Why This Matters

// Language models form the backbone of understanding and generating natural language. Their capabilities to interpret prompts and texts make all kinds of AI applications possible.

// Whether you want to build a classifier, chatbot, or writing aid - the prompt engineering techniques covered in this course will show you how to steer these models toward serving useful needs.`,
//     quiz: {
//       questions: [
//         {
//           id: "q1",
//           question: "What is the primary function of a language model?",
//           options: [
//             "To store large amounts of text data",
//             "To understand and generate natural human language", 
//             "To replace human writers completely",
//             "To translate only between programming languages"
//           ],
//           correctAnswer: 1,
//           explanation: "Language models are AI systems trained to understand and generate natural human language by learning linguistic patterns from text data."
//         },
//         {
//           id: "q2", 
//           question: "Which component of a language model learns contextual relationships between tokens?",
//           options: [
//             "Encoder",
//             "Decoder", 
//             "Attention Mechanism",
//             "Database"
//           ],
//           correctAnswer: 2,
//           explanation: "The attention mechanism is responsible for learning contextual relationships between tokens in the input."
//         },
//         {
//           id: "q3",
//           question: "When did GPT-3 demonstrate unprecedented mastery of language?",
//           options: [
//             "2018",
//             "2020",
//             "2022", 
//             "2024"
//           ],
//           correctAnswer: 1,
//           explanation: "GPT-3 was released in 2020 and demonstrated unprecedented language capabilities by learning from millions of digitised texts."
//         }
//       ]
//     }
//   },
//   {
//     id: "module-2", 
//     title: "Understanding Different Language Models",
//     description: "Exploring major language models like GPT-4, BERT, and RNNs, and staying updated with AI evolution.",
//     estimatedTime: 30,
//     videoUrl: "https://www.youtube.com/embed/kCc8FmEb1nY",
//     content: `# Understanding Different Language Models

// Now that you have a foundational grasp of language models for natural language processing let's survey some of the major models that have propelled the field of prompt engineering forward in recent years. Each model has unique capabilities, strengths, and limitations that inform what prompts will work well or poorly.

// ## Transformer-Based Models

// ### GPT Series
// First, we will cover transformer-based language models. As you learnt, these contain special attention mechanisms to analyse relationships between input tokens. GPT-3, the model that ignited excitement around prompt engineering, is a prime example built on transformers.

// OpenAI released GPT-4 in 2023, which is a much more powerful upgrade from its predecessor for creative content, classification, translation—you name it!

// At a high level, transformers allow both flexible generation and precise task completion. However, models like GPT-4 still require fine-tuning and careful prompt design to correct for biases and ensure ethical integrity.

// ### BERT
// Next, BERT represents another breakthrough transformer model oriented more towards natural language understanding tasks like question-answering rather than text generation. Built by Google, BERT has become enormously influential across search, semantic parsing, and language translation.

// ## RNN Models
// Finally, recurrent neural network (RNN) models also maintain relevance for sequential language tasks. Simple RNNs struggle with longer-term dependencies between tokens, but clever architectural variants like LSTMs sustain context far better across tokens.

// ## Staying Updated with AI Evolution

// ### Recent Developments
// The field of AI, especially language models, is constantly changing. New models with even greater capabilities are being released all the time. Here are some recent additions to the LLM landscape:

// - **Google's Gemini and LaMDA**: Pushing boundaries of factual language understanding and dialogue generation
// - **Meta's AI Research SuperCluster (RSC)**: Enabling development of larger and more sophisticated models
// - **WuDao 2.0**: Chinese-developed model with impressive text generation and translation capabilities

// ### How to Stay Current
// - Follow relevant news sources and blogs specialising in AI
// - Subscribe to newsletters from research labs and AI companies  
// - Engage with online communities discussing latest breakthroughs
// - Experiment with new tools and platforms as they become available`,
//     quiz: {
//       questions: [
//         {
//           id: "q1",
//           question: "What is the main difference between GPT and BERT models?",
//           options: [
//             "GPT is for text generation, BERT is for understanding tasks",
//             "BERT is newer than GPT",
//             "GPT only works with English, BERT works with all languages",
//             "There is no difference between them"
//           ],
//           correctAnswer: 0,
//           explanation: "GPT models excel at text generation tasks, while BERT is designed primarily for natural language understanding tasks like question-answering."
//         },
//         {
//           id: "q2",
//           question: "What architectural improvement do LSTMs have over simple RNNs?", 
//           options: [
//             "They are faster to train",
//             "They can sustain context better across longer sequences",
//             "They use less memory",
//             "They only work with transformers"
//           ],
//           correctAnswer: 1,
//           explanation: "LSTMs (Long Short-Term Memory networks) can maintain context much better across longer token sequences compared to simple RNNs."
//         },
//         {
//           id: "q3",
//           question: "Which company developed the BERT model?",
//           options: [
//             "OpenAI",
//             "Meta", 
//             "Google",
//             "Microsoft"
//           ],
//           correctAnswer: 2,
//           explanation: "BERT was developed by Google and has become influential in search, semantic parsing, and language translation tasks."
//         }
//       ]
//     }
//   },
//   {
//     id: "module-3",
//     title: "Crafting Effective Prompts", 
//     description: "Learning key techniques for constructing high-quality prompts that reliably elicit desired AI responses.",
//     estimatedTime: 35,
//     isPremium: true,
//     videoUrl: "https://www.youtube.com/embed/jC4v5AS4RIM",
//     content: `# Crafting Effective Prompts

// In this lesson, you will learn the key ingredients that go into constructing high-quality prompts primed for success. We will move beyond just typing questions into a text box and, instead, strategically sculpt prompts to reliably elicit the responses we want from AIs.

// ## The Power of Context

// Let's simplify this idea. Imagine you're asking a smart computer program (like an AI) a question. To get the best answer, you need to give it a good hint or context.

// Here's how it works: Instead of just asking the question, you first tell the AI where the question is coming from. For example, if you're asking a legal question, you'd say, "Now, I'm asking you something related to the law." This is like letting the AI know the kind of information it should focus on.

// ### Why Context Matters

// It's a bit like talking to a friend who's good at different things. If you need legal advice, you'd give your legal expert friend some background before asking the question. The same goes for AI. When you give it a clear context or background, it's better prepared to understand and answer your question accurately.

// ## Clear, Step-by-Step Instructions

// Good prompts also simplify complex goals into step-by-step instructions. Break things down into clear, direct language to avoid confusing the model. We filter out ambiguities because AIs interpret prompts ultra-literally. Remove assumptions of common sense, too!

// ### Example: Drawing Instructions

// For instance, imagine you're telling an AI to draw a picture. Instead of saying, "Draw a beautiful landscape," which might be a bit vague, you would give clear and direct instructions:

// **Vague**: "Draw a beautiful landscape"  
// **Clear**: "Draw a beautiful landscape with a big green tree, and a clear blue sky with a yellow sun."

// This straightforward instruction helps the AI because it understands each step precisely.

// ## Align with Model Training

// Additionally, effective prompts align with the model's training data. Leveraging the knowledge already internalised helps prompts resonate better. Research what the model you choose was trained on to match prompts accordingly. Appeal directly to that learned expertise.

// ## Correct Harmful Defaults

// Prompts must also correct potentially harmful defaults, like biases. We proactively reframe problematic assumptions built into models to uphold ethical standards. For example, stating: "Provide helpful, harmless, honest answers..." signals the behaviour we expect.

// ## Spark Creativity

// Finally, good prompts can spark creativity. Imagine you want the AI to come up with a catchy slogan about solar energy, and you want it to sound like something from a Dr. Seuss book. By giving the AI specific instructions like, "Create a slogan in a creative Dr. Seuss style," you're setting the stage for the AI to unleash its imaginative side.

// In this way, you're guiding the AI to be creative within certain boundaries and producing something unique and interesting.`,
//     quiz: {
//       questions: [
//         {
//           id: "q1", 
//           question: "Why is providing context important when crafting prompts?",
//           options: [
//             "It makes the prompt longer",
//             "It helps the AI understand what kind of information to focus on",
//             "It's required by all AI models", 
//             "It doesn't actually matter"
//           ],
//           correctAnswer: 1,
//           explanation: "Context helps guide the AI to understand what domain or type of information it should focus on, leading to more accurate and relevant responses."
//         },
//         {
//           id: "q2",
//           question: "How should complex goals be presented in prompts?",
//           options: [
//             "As single, long sentences",
//             "Broken down into clear, step-by-step instructions",
//             "Using technical jargon only",
//             "With as few words as possible"
//           ],
//           correctAnswer: 1, 
//           explanation: "Breaking complex goals into clear, step-by-step instructions helps avoid confusion since AIs interpret prompts literally and need explicit guidance."
//         },
//         {
//           id: "q3",
//           question: "What should effective prompts do regarding model biases?",
//           options: [
//             "Ignore them completely",
//             "Enhance them for better performance", 
//             "Proactively correct harmful defaults and assumptions",
//             "Only address them if problems arise"
//           ],
//           correctAnswer: 2,
//           explanation: "Effective prompts should proactively reframe problematic assumptions and biases built into models to uphold ethical standards and prevent harmful outputs."
//         }
//       ]
//     }
//   },
  {
    id: "module-4",
    title: "Fine-Tuning and Advanced Customization",
    description: "Learning techniques to customize AI models through fine-tuning and prompt weighting for enhanced performance.",
    estimatedTime: 30,
    videoUrl: "https://www.youtube.com/embed/Q9zv369Ggfk",
    content: `# Fine-Tuning Language Models for Desired Results

So far, you've learned best practices for structuring high-quality prompts from scratch to achieve desired behaviours from AI systems. Now, we build on those core skills with targeted fine-tuning techniques that customise models even further for our prompt engineering needs.

## Understanding Fine-Tuning

Fine-tuning leverages additional training on top of a model's pre-existing knowledge to enhance responses to our prompts. It's like providing extra tutoring on weak spots while preserving overall capabilities. 

For example, say we have an English-trained model that struggles with Spanish prompts. We fine-tune it with more Spanish texts to shore up that limitation.

## Prompt Weighting Technique

One easy yet powerful fine-tuning approach is **prompt weighting**. Here, we feed the model positive and negative examples of output indicating what we want and don't want. Providing these prompt-response pairs trains model writing style, terminology, and values implicitly over time.

### Example: Training for Inclusive Language

For example, to fine-tune an AI writing assistant to use more inclusive language, we would praise responses with constructive, welcoming phrasing while critiquing harmful speech. This conditions the model without having to analyse model parameters directly.

## Real-World Example: Marketing Taglines

Here's a conversation example illustrating the concept of fine-tuning:

**User**: Create a marketing tagline for a new line of eco-friendly home cleaning products.

**AI (before fine-tuning)**: "Clean Green: The Ultimate Cleaning Power!"

**User**: That's good, but it feels a bit too aggressive. Could you make it sound more gentle and caring?

**AI (after fine-tuning)**: "Gentle Earth: Clean Home, Clean Conscience."

### Analysis

- **Before**: The first tagline is straightforward but focuses on power
- **The Fine-Tuning Process**: The user provides feedback about tone, acting as implicit training
- **After**: The AI demonstrates understanding of the desired tone shift with softer, more values-driven language

## Dataset Fine-Tuning

Additionally, we can fine-tune using whole labelled datasets related to our prompts for more customised enhancement. Building off our writing assistant example, aggregating documents representing respectful language and feeding those as training data sharpens that capability.

This goes beyond individual prompt feedback to systematic improvement across many examples.

## Key Benefits

- Preserves general model capabilities while enhancing specific areas
- Can be done through simple positive/negative feedback
- Allows customization without deep technical knowledge
- Improves consistency in desired behaviors over time`,
  isPremium: true,
    quiz: {
      questions: [
        {
          id: "q1",
          question: "What is the main purpose of fine-tuning language models?",
          options: [
            "To completely retrain the model from scratch",
            "To enhance responses while preserving existing capabilities", 
            "To make models smaller and faster",
            "To remove all previous training data"
          ],
          correctAnswer: 1,
          explanation: "Fine-tuning adds targeted training on top of existing knowledge to enhance specific capabilities while preserving the model's general abilities."
        },
        {
          id: "q2",
          question: "What is prompt weighting?",
          options: [
            "Making prompts longer and more detailed",
            "Feeding the model positive and negative examples to guide behavior",
            "Increasing the computational weight of certain prompts",
            "Using mathematical formulas in prompts"
          ],
          correctAnswer: 1,
          explanation: "Prompt weighting involves providing positive and negative examples of desired outputs to implicitly train the model's behavior over time."
        },
        {
          id: "q3",
          question: "In the marketing tagline example, what did the fine-tuning process accomplish?",
          options: [
            "Made the tagline longer",
            "Shifted from aggressive to gentle, caring tone",
            "Added more technical terms", 
            "Removed all adjectives"
          ],
          correctAnswer: 1,
          explanation: "The fine-tuning process successfully shifted the AI's output from an aggressive, power-focused tone to a gentler, more caring and values-driven approach."
        }
      ]
    }
  },
  {
    id: "module-5",
    title: "Ethics, Bias, and Responsible AI", 
    description: "Understanding ethical considerations, identifying bias in AI systems, and implementing responsible AI practices.",
    estimatedTime: 40,
    isPremium: true,
    videoUrl: "https://www.youtube.com/embed/gV0_raKR2UQ",
    content: `# Ethical Considerations and Advanced Prompt Applications

AI systems, as they are used now, can make existing social inequalities worse. This happens because biases in the data and algorithms used to train these systems can be present. If we're not careful, the questions or requests we make to these systems can also make these issues even more problematic.

## The Responsibility of Prompt Engineers

As a prompt engineer, you shape AI responses. This power comes with the responsibility to identify and mitigate bias in your prompts. Biased prompts can trigger unforeseen biases in models, impacting fairness and transparency.

### Example of Problematic Prompts

A prompt like "Write a news article about teenagers causing trouble" might reinforce stereotypes.

### Solution: Testing Prompts

Use testing prompts designed to uncover bias. These can involve prompts addressing sensitive topics to test for biased responses.

## Testing Prompts in Action: Unmasking Bias

Imagine you're developing an AI-powered customer service assistant. Here's an example of how testing prompts can help identify and mitigate bias:

**Scenario**: You want the assistant to recommend products based on customer needs but not perpetuate harmful stereotypes.

### Testing Prompts Examples

**Neutral**: "Based on your preferences, here are some products you might like..."

**Potentially Biased 1**: "Here are some great products for young women who care about their looks."

**Potentially Biased 2**: "For a tech-savvy customer, these innovative products might be perfect."

### Analysis

- **Neutral**: This baseline prompt doesn't introduce assumptions about the customer
- **Potentially Biased 1**: Assumes young women are primarily concerned with appearance - a harmful stereotype  
- **Potentially Biased 2**: Assumes tech-savviness is limited to specific groups, potentially excluding others

## Thinking Ethically About AI Implementation

### Careful Consideration of Use Cases

We need to carefully think about where AI should and shouldn't be used to avoid causing unintended harm. Some areas, like using facial analysis for law enforcement or grading essays with algorithms, can be problematic. It's crucial to thoroughly assess the need for AI in these contexts and consult with communities that may be affected.

### Documentation and Transparency

Documentation is another essential aspect of ethical prompt design. Keeping detailed records of things like:
- Where the data comes from
- How prompts are created  
- Potential issues and limitations

This transparency is important for those who might be affected by AI systems and can also help hold creators accountable if problems arise.

### Encouraging Diversity

Encouraging diversity in the teams working on prompt engineering is also crucial. Having people with different expertise and real-life experiences related to the application areas can help create prompts that consider a wider range of perspectives.

### User Testing and Feedback

User testing is a significant step in ensuring ethical outcomes. Regularly getting feedback from both experts and everyday users helps identify potential issues with prompts early on. This feedback loop not only refines language and interactions but also ensures that the AI system is just and accessible.

## Best Practices for Ethical AI

1. **Proactive Bias Testing**: Regularly test prompts with diverse scenarios
2. **Community Consultation**: Engage with affected communities before deployment  
3. **Transparent Documentation**: Maintain clear records of design decisions
4. **Diverse Teams**: Include varied perspectives in development
5. **Continuous Monitoring**: Establish feedback loops for ongoing improvement
6. **Ethical Guidelines**: Establish clear principles for AI use cases

By integrating responsible AI practices like these into your prompt engineering process, you can develop reliable systems that respect and empower the communities they impact.`,
    quiz: {
      questions: [
        {
          id: "q1",
          question: "Why is it important for prompt engineers to consider bias?",
          options: [
            "It makes prompts more complex",
            "Biased prompts can trigger harmful responses and impact fairness",
            "It's only required for certain industries",
            "Bias doesn't affect AI outputs"
          ],
          correctAnswer: 1,
          explanation: "Prompt engineers have the responsibility to identify and mitigate bias because biased prompts can trigger unforeseen biases in models, impacting fairness and transparency."
        },
        {
          id: "q2", 
          question: "What is the purpose of using testing prompts?",
          options: [
            "To make the AI work faster",
            "To uncover potential bias in AI responses", 
            "To increase the length of responses",
            "To test technical functionality only"
          ],
          correctAnswer: 1,
          explanation: "Testing prompts are specifically designed to uncover bias by addressing sensitive topics and scenarios that might reveal problematic assumptions in AI responses."
        },
        {
          id: "q3",
          question: "Which of the following is NOT mentioned as a best practice for ethical AI?",
          options: [
            "Proactive bias testing",
            "Maximizing speed over safety",
            "Community consultation", 
            "Diverse team composition"
          ],
          correctAnswer: 1,
          explanation: "Maximizing speed over safety is not an ethical practice. The module emphasizes the importance of taking time for proper testing, consultation, and safety measures over rushing deployment."
        }
      ]
    }
  },
  {
    id: "module-6",
    title: "Advanced Strategies and Multi-Step Prompting",
    description: "Mastering sophisticated techniques like chaining prompts, combining models, and unlocking creative AI behaviors.", 
    estimatedTime: 35,
    isPremium: true,
    videoUrl: "https://www.youtube.com/embed/ahnGLM-RC1Y",
    content: `# Advanced Prompt Engineering Strategies

We have covered core conceptual building blocks so far - now we unleash advanced strategies for truly sophisticated prompt engineering!

## Multi-Step Prompting

First, let's expand beyond single requests to multi-step prompts that chain complex logic across interactions. Instead of asking just one question at a time, imagine using a series of questions like a game of "20 questions" with an AI. You can adjust your questions based on the AI's answers, getting closer to the answer you seek.

### Example: Travel Research

Imagine you're researching a new travel destination. You could ask the AI:

1. "What are the most popular tourist destinations in Europe?"
2. "Tell me more about [specific destination from the first answer]."  
3. "Is there anything unique to experience there?"

By asking follow-up questions based on the previous answers, you can gather more specific and relevant information.

### Applications of Multi-Step Prompting

This approach allows for more complex interactions with AI, letting you:

- **Identify unknown objects**: Ask questions to describe an object and have the AI guess what it is
- **Guide research**: Start with broad questions and refine them based on answers to get focused information
- **Clarify needs before generating outputs**: Ask clarifying questions to ensure the AI understands your request

### Sample Multi-Step Conversation

**You**: I found this object at the beach. It's round, smooth, and about the size of a tennis ball. It has a faint hum when I put it near my ear.

**AI**: Based on your description, it could be several things. Is it made of metal, plastic, or something else?

**You**: It feels light and seems to be made of plastic.

**AI**: Interesting. Does it have any markings or buttons on it?

**You**: No, it's completely smooth with no markings.

**AI**: Considering its location at the beach and humming sound, it might be a type of buoy used for scientific research or a lost robotic toy. Would you like me to search for information on different types of buoys?

## Combining AI Models for Enhanced Results

Another advanced tactic involves combining AI models for enhanced results. Imagine using different tools for different jobs. You can combine the strengths of multiple language models in one workflow:

### Example Workflow

1. **Start with GPT-4** to generate a draft essay with creative content
2. **Feed that draft to Claude** for refinement, asking it to consider balance, citations, and specific guidelines

This "chaining" of models leverages their combined strengths:
- GPT-4's creative power for initial content generation
- Claude's analytical skills for refining content with specified criteria

## Unlocking Surprising Capabilities

Additionally, while prompts seem straightforward, they can unlock surprising capabilities in AI models through creative techniques:

### Mixing Metaphors

Imagine teaching a chemistry model to create the perfect cake recipe. Instead of dry instructions, you could use a metaphor: "Combine the delicate balance of a ballerina with the explosive power of a firework for the ultimate cake batter!"

This unconventional approach can spark creativity and lead to unexpected results.

### Abstract Storytelling  

Need a logo design, but stuck on how to describe it? Try an abstract story: "Imagine a courageous knight venturing through a fantastical forest, their shield emblazoned with a symbol of strength and resilience."

This vivid scenario can guide the AI in creating a logo that captures your desired message.

## Key Principles

These techniques demonstrate the true power of prompts. They go beyond simple instructions and tap into the "combinatorial expressiveness" of AI models, allowing for:

- **Surprising and creative results**
- **Complex problem-solving workflows** 
- **Enhanced output quality through model combination**
- **Novel approaches to challenging tasks**

The possibilities are endless, and just like teaching students or employees, you can push boundaries and explore new ways to interact with these powerful tools.`,
    quiz: {
      questions: [
        {
          id: "q1",
          question: "What is the main advantage of multi-step prompting over single prompts?",
          options: [
            "It's faster to execute",
            "It allows for more complex interactions and refined results",
            "It uses less computational resources", 
            "It only works with specific AI models"
          ],
          correctAnswer: 1,
          explanation: "Multi-step prompting allows you to build complex interactions where each question can be refined based on previous answers, leading to more specific and relevant information."
        },
        {
          id: "q2",
          question: "In the model combination example, what are the respective strengths of GPT-4 and Claude?",
          options: [
            "GPT-4 for analysis, Claude for creativity",
            "GPT-4 for creative generation, Claude for analytical refinement",
            "Both models have identical strengths",
            "GPT-4 for translation, Claude for summarization"
          ],
          correctAnswer: 1,
          explanation: "The example shows GPT-4 being used for its creative power in initial content generation, while Claude is used for its analytical skills in refining and improving the content."
        },
        {
          id: "q3", 
          question: "What does the term 'combinatorial expressiveness' refer to in AI prompting?",
          options: [
            "Using mathematical combinations in prompts",
            "The ability to unlock surprising capabilities through creative prompting techniques",
            "Combining multiple languages in one prompt",
            "Using only technical terminology"
          ],
          correctAnswer: 1,
          explanation: "Combinatorial expressiveness refers to the AI's ability to produce surprising and creative results when prompts go beyond simple instructions and use innovative techniques like metaphors and abstract storytelling."
        }
      ]
    }
  },
  {
    id: "module-7",
    title: "Real-World Applications Across Industries",
    description: "Exploring how prompt engineering transforms healthcare, finance, education, and creative industries.",
    estimatedTime: 30,
    isPremium: true,
    videoUrl: "https://www.youtube.com/embed/9hb_0TZ_MtM",
    content: `# Applications of Prompt Engineering

In this final topic, we build real-world context, examples, and inspiration for applying prompt engineering across industries. This grounds the abstract capabilities we have covered in practical domains where AI prompts fuel transformation today.

## Healthcare Applications

### Helping Doctors and Patients

Imagine doctors using prompts to help AI models:

- **Understand medical reports**: Prompts can guide the AI to identify relevant information and suggest diagnostic codes
- **Make screening decisions**: Prompts can help the AI follow established protocols for different screenings  
- **Draft patient summaries**: Prompts can guide the AI to prepare initial summaries of a patient's medical history, freeing up the doctor's time

This approach combines the knowledge of experienced doctors (institutional knowledge) with the power of AI to improve healthcare.

### Real-World Example

Companies like Babylon Health use AI-powered chatbots guided by prompts to offer patients preliminary health assessments based on their reported symptoms. This helps streamline the process and frees up doctors for more complex cases.

## Finance Applications

### Automating Report Writing

Imagine using prompts to help AI models write routine financial reports! Prompts can guide the AI to:
- Format reports according to industry standards
- Use specific financial terminology and language
- Include explanations for investors following regulations
- Incorporate historical data analysis

This lets companies automate routine tasks and focus on strategic decision-making.

### Industry Example

Companies like BlackRock are exploring using AI tools with prompts to automate parts of their financial reporting process, saving time and resources. While OpenAI Whisper is not specifically used in this context, it exemplifies the growing use of commercial prompt technology across various industries.

## Education Applications  

### Helping Students Learn and Write

Imagine using prompts to help AI tools:

- **Break down complex tasks**: Prompts can guide students through writing essays step-by-step, outlining the structure, and providing prompts for each section
- **Learn through questioning**: Prompts can encourage students to think scientifically by suggesting experiments to test their ideas
- **Understand new concepts**: Prompts can provide context by relating new information to the student's existing knowledge

These techniques help students learn and write more effectively.

### Practical Example

Tools like Quillbot utilise prompts to guide students through the writing process, offering step-by-step instructions and prompts for different sections of an essay. This helps them build their writing skills and learn the structure of persuasive arguments.

## Creative Industries

### Fueling Innovation

Imagine using prompts to:

- **Develop new recipes**: Food websites can use prompts to ask users for unique flavour combinations, sparking creative recipe ideas
- **Inspire artists**: Prompts can be used to describe fantastical scenarios, guiding artists in creating stunning sci-fi illustrations

### Creative Applications

The possibilities are truly endless! Whether it's in the kitchen or the art studio, prompts can be used to fuel creativity and unlock new possibilities.

## Key Success Factors

Across all these industries, successful prompt engineering applications share common characteristics:

### 1. Domain Expertise Integration
- Combining AI capabilities with professional knowledge
- Leveraging institutional expertise and established protocols
- Maintaining human oversight and decision-making authority

### 2. Process Automation
- Automating routine and repetitive tasks
- Freeing up professionals for complex, high-value work
- Maintaining quality while increasing efficiency

### 3. Enhanced Creativity and Innovation
- Using AI to explore new possibilities and combinations
- Sparking human creativity through AI-generated suggestions
- Breaking through traditional thinking patterns

### 4. Ethical Implementation
- Maintaining transparency in AI-assisted processes
- Ensuring appropriate human oversight
- Respecting privacy and professional standards

## Industry Impact

As you have seen, thoughtful prompt engineering unlocks revolutionary applications across industries, cultures, and disciplines! The key is understanding how to:

- Identify processes that can benefit from AI assistance
- Design prompts that leverage both AI capabilities and human expertise  
- Implement solutions that enhance rather than replace human judgment
- Scale innovations while maintaining quality and ethical standards

The future of prompt engineering lies in these practical applications that solve real problems and create genuine value across diverse professional domains.`,
    quiz: {
      questions: [
        {
          id: "q1",
          question: "How do prompts help in healthcare applications?",
          options: [
            "By replacing doctors entirely", 
            "By guiding AI to assist with reports, screenings, and summaries while preserving doctor expertise",
            "By making medical decisions automatically",
            "By storing patient data only"
          ],
          correctAnswer: 1,
          explanation: "In healthcare, prompts guide AI to assist doctors with tasks like understanding medical reports, following screening protocols, and drafting summaries, while combining AI capabilities with medical expertise."
        },
        {
          id: "q2",
          question: "What is a key benefit of using prompt engineering in financial reporting?",
          options: [
            "Eliminating the need for financial regulations",
            "Making all investment decisions automatically", 
            "Automating routine tasks while following standards and freeing up time for strategy",
            "Replacing financial analysts completely"
          ],
          correctAnswer: 2,
          explanation: "Prompt engineering in finance helps automate routine reporting tasks while following industry standards and regulations, allowing professionals to focus on more strategic work."
        },
        {
          id: "q3",
          question: "What do successful prompt engineering applications across industries have in common?",
          options: [
            "They completely replace human workers",
            "They only work in technical fields", 
            "They combine AI capabilities with domain expertise and maintain human oversight",
            "They require no human input after setup"
          ],
          correctAnswer: 2,
          explanation: "Successful applications combine AI capabilities with professional domain knowledge, automate routine tasks, enhance creativity, and maintain appropriate human oversight and ethical standards."
        }
      ]
    }
  },
  {
    id: "module-8",
    title: "Building AI Applications - Practical Implementation",
    description: "Hands-on approach to building real-world AI applications using prompt engineering principles and best practices.",
    estimatedTime: 40,
    isPremium: true,
    videoUrl: "https://www.youtube.com/embed/pP2o8mErcxs",
    content: `# Building AI Applications With Prompt Engineering

By now, you have built strong conceptual foundations and tactical skills across prompt design, language models, bias mitigation, and more. Now, we will bring all those pieces together into practice as you attempt to build real-world AI applications hands-on.

We will walk through end-to-end processes to identify issues amenable to AI solutions, design prompts customised for models that can assist, integrate fine-tuning strategies as needed for enhanced performance, and rigorously test outputs prior to final deployment.

## Building an AI Writing Assistant: Step-by-Step

Let's create an AI assistant to help students improve their essays by offering constructive feedback. Here's how we'd do it:

### Step 1: Define the Goal

**Goal**: Improve writing quality and engagement while providing encouraging and clear guidance. We want to avoid discouraging students by being too harsh.

**Key Requirements**:
- Constructive, positive feedback
- Specific, actionable suggestions
- Encouraging tone that builds confidence
- Focus on improvement areas without overwhelming criticism

### Step 2: Train the AI

**Gather Training Data**:
- Collection of helpful and positive teacher reviews on essays
- Examples of constructive feedback that led to student improvement
- Samples of encouraging language that motivated students

**Create Structured Prompts**:
- Prompts that emphasise positive framing and focus on areas for improvement
- Instructions that guide the AI to identify strengths before suggesting changes
- Templates that ask clarifying questions about the essay content and structure

### Example Prompt Structure

You are a supportive writing tutor. When reviewing student essays:
1. First identify 2-3 strengths in the writing
2. Then suggest 1-2 specific areas for improvement  
3. Provide encouraging guidance on how to enhance these areas
4. Ask one clarifying question to help the student think deeper about their topic
5. End with positive reinforcement about their potential

### Step 3: Test and Refine

Run comprehensive tests to evaluate AI performance across multiple dimensions:

**Positivity Testing**:
- Is the feedback encouraging and supportive?
- Does it build student confidence while providing guidance?
- Are suggestions framed constructively rather than critically?

**Accuracy Assessment**:
- Does the feedback identify genuine areas for improvement?
- Are the suggestions technically sound and pedagogically appropriate?
- Is the advice relevant to the student's skill level?

**Helpfulness Evaluation**:
- Is the feedback clear and actionable for students?
- Can students easily understand how to implement suggestions?
- Does the guidance provide concrete next steps?

### Step 4: Implementation and Deployment

**Integration Strategy**:
- Embed the AI assistant in existing learning management systems
- Provide teacher dashboards for monitoring AI feedback quality
- Create student interfaces that encourage iterative improvement

**Quality Assurance**:
- Implement human oversight for sensitive or complex cases
- Establish feedback loops for continuous improvement
- Monitor student outcomes and satisfaction metrics

## Development Tools and Resources

### Open-Source Libraries
You don't have to build everything from scratch. Numerous open-source libraries and frameworks provide pre-built components:

- **TensorFlow**: Machine learning framework for building and training models
- **PyTorch**: Deep learning library with dynamic computational graphs  
- **Scikit-learn**: Machine learning library for data analysis and modeling
- **Hugging Face Transformers**: Pre-trained models and tokenizers

These tools empower you to focus on the unique aspects of your application without reinventing foundational components.

### Quick Start Option: GPTs

For beginners or rapid prototyping, GPTs offer a simple entry point:

**What are GPTs?**
Custom versions of ChatGPT that you can create for specific purposes. They're tailored versions designed to be more helpful for particular tasks, work scenarios, or home applications.

**Key Benefits**:
- No coding required for creation
- Easy as starting a conversation and giving instructions  
- Can be enhanced with extra knowledge and capabilities
- Options for web searching, image generation, or data analysis

**Getting Started**:
Visit chat.openai.com/create to try building your own GPT for specific use cases.

## Best Practices for AI Application Development

### 1. Start Simple, Iterate Often
- Begin with basic functionality and clear use cases
- Test early and often with real users
- Gradually add complexity based on user feedback

### 2. Maintain Human-AI Collaboration
- Design for human oversight and intervention
- Preserve human decision-making authority in critical areas
- Create transparent processes that users can understand

### 3. Prioritize Ethical Considerations
- Implement bias testing throughout development
- Establish clear guidelines for appropriate use cases
- Create mechanisms for user feedback and complaint resolution

### 4. Focus on User Experience
- Design intuitive interfaces that enhance rather than complicate workflows
- Provide clear explanations of AI capabilities and limitations
- Ensure accessibility across different user groups and technical skill levels

### 5. Plan for Scale and Maintenance
- Build systems that can handle growing user bases
- Establish processes for ongoing model updates and improvements
- Create documentation and training materials for long-term sustainability

## Measuring Success

### Key Performance Indicators
- **User Adoption**: How many users actively engage with the AI application?
- **Task Completion**: Are users successfully completing their intended tasks?
- **Quality Metrics**: Are outputs meeting established quality standards?
- **User Satisfaction**: Do users find the application helpful and easy to use?
- **Ethical Compliance**: Is the system operating within established ethical guidelines?

### Continuous Improvement Cycle
1. **Monitor Performance**: Track KPIs and user feedback regularly
2. **Identify Improvements**: Analyze data to find enhancement opportunities  
3. **Update Prompts**: Refine prompting strategies based on insights
4. **Test Changes**: Validate improvements before full deployment
5. **Deploy Updates**: Roll out enhancements systematically
6. **Measure Impact**: Assess the effectiveness of changes

By following these comprehensive steps and learning from similar projects, you'll gain practical experience in using the skills covered in this course to create real-world AI applications that provide genuine value to users while maintaining ethical standards and technical excellence.

Remember, prompt engineering is a powerful tool - now it's time to use it to build something amazing that makes a positive impact in the world!`,
    quiz: {
      questions: [
        {
          id: "q1",
          question: "What should be the primary focus when defining goals for an AI writing assistant?",
          options: [
            "Making the AI as critical as possible to improve writing quickly",
            "Providing encouraging guidance while avoiding overwhelming criticism", 
            "Replacing human teachers entirely",
            "Focusing only on grammar and spelling errors"
          ],
          correctAnswer: 1,
          explanation: "The goal should be to improve writing quality while providing encouraging and clear guidance, avoiding harsh criticism that might discourage students."
        },
        {
          id: "q2",
          question: "What is a key advantage of using open-source libraries like TensorFlow and PyTorch?",
          options: [
            "They eliminate the need for any programming knowledge",
            "They provide pre-built components so you can focus on unique aspects of your application",
            "They automatically handle all ethical considerations",
            "They guarantee perfect AI performance"
          ],
          correctAnswer: 1,
          explanation: "Open-source libraries provide pre-built components and functions that allow developers to focus on the unique aspects of their application without rebuilding foundational elements."
        },
        {
          id: "q3",
          question: "Which of the following is NOT mentioned as a key performance indicator for AI applications?",
          options: [
            "User adoption rates",
            "Task completion success", 
            "Maximum processing speed",
            "User satisfaction scores"
          ],
          correctAnswer: 2,
          explanation: "While processing speed can be important, the module specifically mentions user adoption, task completion, quality metrics, user satisfaction, and ethical compliance as key performance indicators - not maximum processing speed."
        }
      ]
    }
  }
];