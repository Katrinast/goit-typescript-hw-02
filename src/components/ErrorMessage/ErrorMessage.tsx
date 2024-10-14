interface ErrorMessageProp {
  message?: string;
}


export default function ErrorMessage({message = "Opss somthing wrong! Try again"}: ErrorMessageProp) {
  return <p>{message}</p>
}