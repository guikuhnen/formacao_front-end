type UserFormProps = {
  data: { name: string; email: string };
  updateFieldHandler: (key: string, value: string) => void;
};

function UserForm({ data, updateFieldHandler }: UserFormProps) {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite o seu nome"
          required
          value={data.name || ""}
          onChange={(e) => updateFieldHandler(e.target.id, e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite o seu email"
          required
          value={data.email || ""}
          onChange={(e) => updateFieldHandler(e.target.id, e.target.value)}
        />
      </div>
    </div>
  );
}

export default UserForm;
