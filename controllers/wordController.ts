import { Request, Response } from "express";
import { Word } from "../interfaces/word";
import { ApiResponse } from "../interfaces/apiResponse";

export async function countWords(req: Request, res: Response) {
  try {
    const sentence: string = req.body.sentence;

    // Kollar om mening finns
    if (!sentence) {
      const response: ApiResponse<null> = {
        success: false,
        error: "Fel, vänligen fyll i en mening",
      };
      res.status(400).json(response);
      return;
    }

    const wordCount = countWordsInSentence(sentence);
    const mostFrequentWords = getMostFrequentWords(wordCount, 10);

    const response: ApiResponse<Word[]> = {
      success: true,
      data: mostFrequentWords,
    };
    res.json(response);
  } catch (error) {
    const response: ApiResponse<null> = {
      success: false,
      error: "Serverfel",
    };
    res.status(500).json(response);
  }
}

function countWordsInSentence(sentence: string): Record<string, number> {
  const wordCount: Record<string, number> = {};

  // Sorterar ord m.h.a mellanslag
  const words = sentence.toLowerCase().split(/\s+/);

  for (const word of words) {
    // Om word redan existerar i wordCount, inkrementera med 1
    if (word in wordCount) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  }

  return wordCount;
}

function getMostFrequentWords(
  wordCount: Record<string, number>,
  limit: number
): Word[] {
  const wordCountArray = Object.entries(wordCount);

  // Sortera efter fallande ordning
  wordCountArray.sort((a, b) => b[1] - a[1]);

  // Mappar upp 10 mest frekventa orden
  const mostFrequentWords: Word[] = wordCountArray
    .slice(0, limit)
    .map(([word, count]) => ({ word, count }));

  return mostFrequentWords;
}
