export default function Form() {
  return (
    <div>
      <form>
          <label>
              Nome: <input type="text"/>
          </label>

          <label>
              email: <input type="email"/>
          </label>
          <label>
              address: <input type="address"/>
          </label>
          <label>
              Phone: <input type="number"/>
          </label>

          <button type="button">Subimt</button>
        </form>
      </div>
      )
  }