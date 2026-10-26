import json

with open("test10_raw_items.json") as f:
    items = json.load(f)

for it in items[31:]:
    iid = it["id"]
    print(f"=== {iid} ===")
    print("Dialogue:", " // ".join(it["dialogueSegs"][:15]))
    for q in it["questions"]:
        qnum = q["num"]
        qtxt = q["question"]
        qans = q["correctAnswer"]
        print(f"  Q{qnum}: {qtxt} (ans: {qans})")
        for k, v in q["options"].items():
            print(f"    ({k}) {v}")
