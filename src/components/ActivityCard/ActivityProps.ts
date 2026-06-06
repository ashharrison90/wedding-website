export interface ActivityProps {
  id: string; // stable key sent to the backend (e.g. "snorkelling")
  title: string;
  description: string;
  imgSrc: string;
  link: string;
  cost: number;
  raised: number;
}
