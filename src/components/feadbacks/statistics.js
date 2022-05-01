export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div>
      <h2>Statistics</h2>
      {total === 0 ? (
        <p>There is no feedback</p>
      ) : (
        <ul>
          <li>Good: {good}</li>
          <li>Neutrel: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>
            Total:
            {total}
          </li>
          <li>
            Positive feetback:
            {positivePercentage}%
          </li>
        </ul>
      )}
    </div>
  );
}
