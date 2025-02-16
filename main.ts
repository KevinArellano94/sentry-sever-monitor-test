import * as Sentry from "npm:@sentry/deno";

Sentry.init({
	dsn: Deno.env.get('sentry_dsn'),
	integrations: [Sentry.denoCronIntegration()],
});

// Deno.cron("Sample cron job", "1 * * * *", () => {
// 	console.log("This will run every 10 minutes");
// });


Sentry.withMonitor("sentry-sever-monitor-test", () => {
	setInterval(() => {
		console.log("This will run every second");
		console.log(Deno.env.get('sentry_dsn'));
	}, 1000);

	// setTimeout(() => {
	// 	throw new Error();
	// });
});

// import * as Sentry from "https://deno.land/x/sentry@8.55.0/index.mjs";
// import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

// Sentry.init({
// 	dsn: "https://683c2edfdf0a61b421c83ad584fce398@o4508827455389696.ingest.us.sentry.io/4508827462074368",
// 	tracesSampleRate: 1.0,
// 	tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
// });

// const handler = async (request: Request): Promise<Response> => {
// 	const body = `Hello from Deno! You requested: ${request.url}`;
// 	return new Response(body, {
// 		status: 200,
// 		headers: {
// 			"content-type": "text/plain",
// 		},
// 	});
// };

// // setTimeout(() => {
// // 	throw new Error();
// // });

// const port = 3000;
// console.log(`Server running on http://localhost:${port}`);
// await serve(handler, { port });