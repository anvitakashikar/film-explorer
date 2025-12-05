import { useState } from "react";

type Props = {
  onSearch: (q: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  const [q, setQ] = useState("");

  const submit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (q.trim()) onSearch(q.trim());
  };

  return (
    <form onSubmit={submit} className="search-form">
      <input
        className="search-input"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search movies..."
      />
      <button className="search-btn">Search</button>
    </form>
  );
}
