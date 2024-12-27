type Props = {
  children: string;
};

export default function Button({ children }: Props) {
  return (
    <button
      type="button"
      className="rounded-8 bg-primary px-30 py-12 text-20 font-medium leading-24 text-white"
    >
      {children}
    </button>
  );
}
