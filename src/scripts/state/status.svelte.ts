export const status = $state({ client: false });

export function client_live()
{
	status.client = true;
}
