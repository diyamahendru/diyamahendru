export const blogList = [
  {
    id: 1,
    title: "Big O",
    category: "development",
    subCategory: [
      "data structures",
      "algorithm",
      "time complexity",
      "space complexity",
    ],
    description:
      "While developing an algorithm, monitoring the time and space complexity is crucial. It helps us judge the time our algorithm will take to run and the memory space it will be requiring for the same.",
    content: `While developing an algorithm, monitoring the time and space complexity is crucial. It helps us judge the time our algorithm will take to run and the memory space it will be requiring for the same. 
    \n\n Big O time is the language and metric used to describe the efficiency of an algorithm. A good developer knows and can track his algorithm’s Big O. 
    \n\n ##Time Complexity 
    \n\n In simple words, the time complexity of an algorithm is the time taken to run the algorithm, as a function of the input of the length. 
    \n\n We can describe the algorithm runtimes using the following notations: \n\n 
    \n\n ###### 1. O (Big O)
    \n\n In simple words, big O is an upper bound on time. For example, printing all the values in an array of size of N takes O(N) but it’s upper bound can also be O(N^2) or O(N!). This is equivalent to the less than equal to relationship.\n\n   
    \n\n ###### 2. Ω (Big Omega)
    \n\n This is equivalent to big O but it is for the lower bound. So printing an array of size N is Ω(N) but also Ω(log N) and Ω(1). \n\n 
    \n\n ###### 3. Θ (Big Theta)
    \n\n This gives a tight bound on runtime i.e. an algorithm is Θ(N) when that algorithm is both O(N) and Ω(N). \n\n 
    \n\n ⭐ Sometimes O and Θ are merged together. Today the definition of O is closer to Θ. So O(N^2) for printing an array of size N is seen incorrect, rather O(N) is used conventionally.
    \n\n ##Space Complexity
    \n\n It is defined as the space or the memory used in order to run an algorithm. Let’s say we need to create an array of size N, the space complexity for this algorithm will the O(N) while for creating an 2D matrix would be O(N^2). \n\n 
    \n\n Below is the Big O chart for reference.
    \n\n ![chart](/assets/images/blog1pic1.jpg) \n\n 
    \n\n What we discussed above is different from Best, Worst and Average Case. Lets dive into these and see how these are different.
    \n\n ## Best Case
    \n\n It is a scenario where in we have to perform the minimum number of steps on input data of n elements. Best case scenarios are usually not paid much attention to because they are not very useful concept. This is because we can pick any algorithm, provide a special case input and get O(1) time. \n\n 
    \n\n ## Worse Case
    \n\n It is a scenario where in we have to perform  the maximum number of steps on input data of size n. For example, for Linear Search the worse case scenario can be when the element to be searched is not present in the array. \n\n
    \n\n ## Average Case
    \n\n It is a scenario where in we have to perform an average number of steps on input data of n elements. It is calculated by adding all the calculated values and dividing the sum by the total number of inputs. \n\n 
    \n\n ⭐ For most algorithms the average and the worse case scenarios calculate out to be the same.
    \n\n ⭐ Best, worse and average case describe the Big O (or Big Theta) time for particular inputs. \n\n
    \n\n  ![line](/assets/images/dividing-line.png) \n\n`,
    descImgs: ["/assets/images/author.jpg", "/assets/images/author.jpg"],
    authorName: "Diya Mahendru",
    authorAvatar: "/assets/images/author.jpg",
    createdAt: "August 07, 2022",
    cover: "/assets/images/blog1.png",
  },
];
