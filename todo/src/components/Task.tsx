import { createSignal } from "solid-js";

interface Props {
    title: string,
    description: string,
}

export function Task(props: Props) {
    const [isVisible, setIsVisible] = createSignal(true);

    return(
        <>
            {isVisible() && (
                <div class="flex flex-col gap-4 rounded-xl bg-zinc-100 w-96 p-4 px-4">
                    <h1 class="text-xl font-semibold">{props.title}</h1>
                    <p>{props.description}</p>
                    <div class="flex gap-4">
                        <button onClick={() => setIsVisible(false)} class="bg-red-200 rounded-xl px-4 py-2">Удалить задачу</button>
                    </div>
                </div>
            )}
        </>
    );
}
