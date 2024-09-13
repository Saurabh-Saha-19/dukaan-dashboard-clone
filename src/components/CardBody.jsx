function CardBody({ price, orderLink }) {
  return (
    <div className="flex justify-between">
      <p className="text-[32px] leading-9 font-normal">{price}</p>

      <span className="flex">
        <p className="underline underline-offset-2">{orderLink}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </span>
    </div>
  );
}
export { CardBody };
