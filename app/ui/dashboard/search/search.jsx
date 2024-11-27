"use client";
import styles from "./search.module.css";
import { MdSearch } from "react-icons/md";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  // Função debounced para evitar múltiplas chamadas seguidas
  const handleSearch = useDebouncedCallback((e) => {
    const query = e.target.value.trim(); // Remove espaços extras
    const params = new URLSearchParams(searchParams);

    if (query) {
      params.set("q", query); // Define o valor da busca
    } else {
      params.delete("q"); // Remove o parâmetro se estiver vazio
    }
    replace(`${pathname}?${params.toString()}`); // Atualiza a URL
  }, 300);

  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        defaultValue={searchParams.get("q") || ""} // Preserva o valor da busca no campo
        onChange={handleSearch} // Chamado sempre que o usuário digita
      />
    </div>
  );
};

export default Search;
