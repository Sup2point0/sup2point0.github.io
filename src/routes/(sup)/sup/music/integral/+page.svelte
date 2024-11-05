<script>

import AlbumInfo from "#parts/music/album-info.svelte";
import Track from "#parts/music/track-block.svelte";
import Tags from "#parts/music/tags.svelte";

</script>


<AlbumInfo daw="gb">
  <h1> Integral </h1>
  <Tags tags={["electronic", "tech"]} />
</AlbumInfo>

<Track
  preview={true}
  feat={true}
  shard="audacious-antiderivative"
  name="Audacious Antiderivative"
  tags={["electronic", "rhythm", "time signature shenanigans"]}
  album="integral"
  file=""
/>
<Track
  preview={true}
  shard="luminous-conjecture"
  name="Luminous Conjecture"
  tags={[]}
  album="integral"
  file=""
/>
<Track
  preview={true}
  shard="pathological-constant"
  name="Pathological Constant"
  tags={[]}
  album="integral"
  file=""
/>
<Track
  preview={true}
  shard="subzero-abstraction"
  name="Subzero Abstraction"
  tags={[]}
  album="integral"
  file=""
/>
<Track
  preview={true}
  shard="transverse-erratum"
  name="Transverse Erratum"
  tags={[]}
  album="integral"
  file=""
/>
<Track
  preview={true}
  shard="canonical-destruction"
  name="Canonical Destruction"
  tags={[]}
  album="integral"
  file=""
/>
<Track
  preview={true}
  shard="infinitesimal-ignition"
  name="Infinitesimal Ignition"
  tags={[]}
  album="integral"
  file=""
/>
