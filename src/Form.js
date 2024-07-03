import { useState } from "react";
export default function Form({ onAddItems }) {
  // ### Controlled Elements:
  // Para que possamos manipular os valores da input com mais eficiência, devemos utilizar a técnica de Controlled Elements, que consiste em três passos:

  // 1. Criar um pedaço de estado

  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  // 2. Usar o estado como valor do input (value={description})
  // 3. Adicionar um listener de eventos de mudança no input (onChange=)

  function handleSubmit(e) {
    e.preventDefault(); //Serve para previnir que a página recarregue ao enviar (comportamento padrão do HTML)

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip? </h3>

      {/* Array.from(arrayLike, mapFn, thisArg)
        Vamos detalhar cada um desses parâmetros:
  
        arrayLike: Um objeto semelhante a um array ou iterável a partir do qual se deseja criar o novo array. Isso pode ser uma string, um objeto com a propriedade length, um Set, um Map, entre outros.
  
        mapFn (opcional): Uma função de mapeamento que é chamada para cada elemento do array, permitindo que você transforme os elementos durante a criação do array. Essa função recebe três argumentos:
            - currentValue: O valor do elemento atual.
            - index (opcional): O índice do elemento atual.
            - array (opcional): O array original.
        
        thisArg (opcional): Um valor a ser usado como this ao executar a função de mapeamento mapFn. */}
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        // Aqui passamos o evento na função pois dentro dele ele carrega target. Target representa o elemento input inteiro e pegamos o value que ele carrega. Assim, o React atualizará o valor de description em tempo real.
        // OBS: e.target.value é SEMPRE uma string
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
