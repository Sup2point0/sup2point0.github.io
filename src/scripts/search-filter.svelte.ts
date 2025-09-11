interface Searchable {
  _score_: number;
}


export class SearchFilter<Type extends Searchable>
{
  query: string = $state("");

  reverse: boolean = $state(false);


  apply(
    source: Type[], 
    scorer: (entity: Type) => number,
  ): void
  {
    if (this.query === "") return;

    for (let each of source) {
      each._score_ = scorer(each);
    }

    source.sort((prot, deut) => deut._score_ - prot._score_);

    if (this.reverse) {
      source.reverse();
    }
  }
}
