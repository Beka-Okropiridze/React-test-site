
export const TextInput = ({ value, onChange }) => {
    const id = Math.random().toString();
    return (
    <div class="input-group mb-3">
    <span class="input-group-text" id={id}>
        @
    </span>
    <input 
        type="text" 
        className="form-control" 
        placeholder="Username" 
        id={id} 
        value={value}
        onChange={onChange}
        />
  </div>
    )
}