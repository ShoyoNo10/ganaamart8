import StoryDeck from "@/components/StoryDeck";
import { MEMORIES } from "@/lib/memories";

export default function StoryPage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <div className="text-3xl font-black">Бидний дурсамжуудын өчүүхэн хэсгээс</div>
      </div>

      <StoryDeck items={MEMORIES} />
    </div>
  );
}