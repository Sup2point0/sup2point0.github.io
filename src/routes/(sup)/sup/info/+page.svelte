<svelte:head>
  <title> info · Sup#2.0 </title>
  <meta name="description" content="All about me!" />
</svelte:head>

<table>
  <tbody>
    <tr>
      <th> username </th>
      <td> Sup#2.0 / Sup2.0 / Sup2point0 </td>
    </tr>
    <tr>
      <th> pronouns </th>
      <td> he / him </td>
    </tr>
    <tr>
      <th> locale </th>
      <td> Antarctica </td>
    </tr>
    <tr>
      <th> timezone </th>
      <td> UTC </td>
    </tr>
    <tr>
      <th> language </th>
      <td> English (British) / Chinese (Mandarin) </td>
    </tr>
    <tr>
      <th> cake day </th>
      <td> September </td>
    </tr>
    <tr>
      <th> generation </th>
      <td> Z </td>
    </tr>
  </tbody>
</table>

<div class="block">
  <p> thank you for stalking me, it’s been my pleasure ^v^ </p>
</div>


<style lang="scss">

table {

}

tr {
  text-align: left;
}

th {
  padding: 0.5em 2rem 0.5em 0.5em;
  @include font-ui;
  font-weight: normal;
  color: rgb(white, 60%);
}

.block {
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    padding: 0.5em 1em;
    @include font-flavour;
    font-size: 120%;
    color: $col-deut;
    text-align: center;
    background-color: $col-card;
    border-radius: 1em;
    transition: all 0.2s ease-out;

    &:hover {
      cursor: default;
      background-color: $col-card-hover;
      transform: scale(1.04);
    }
  }
}

</style>
