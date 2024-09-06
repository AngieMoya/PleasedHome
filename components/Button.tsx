'use client';

type ButtonProps = {
  text: string;
  size: string;
  variant: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
};

const variants = {
  primary: 'bg-primary-green text-white hover:bg-secondary-green',
  secondary: 'border-2 border-primary-green text-primary-green hover:bg-mustard hover:text-white hover:border-mustard',
  tertiary: 'bg-secondary-green text-white hover:bg-primary-green',
  quaternary: 'bg-mustard text-white hover:bg-secondary-green',
};

export default function Button(props: ButtonProps) {
  const { text, size, variant } = props;
  return <button className={`${variants[variant]} rounded-full p-3 font-semibold ${size}`}>{text}</button>;
}
