export interface BioData {
  nickname: string;
  age: number;
  languages: string[];
  description: string;
}

export interface AudioState {
  isPlaying: boolean;
  volume: number;
}